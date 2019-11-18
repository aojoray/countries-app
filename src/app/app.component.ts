import { Component, OnInit, OnDestroy } from '@angular/core';
import { Service, Country } from './service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'countries-app';
  countries = [];
  country = {};
  filteredOptions: Observable<string[]>;

  countryctrl = new FormControl();
  subscription: Subscription;
  constructor(private service: Service) {}

  ngOnInit() {
    // Getting country list from service (API acces point)
    this.service.getCountries().subscribe(res => {
      this.countries = res;
      this.filteredOptions = this.countryctrl.valueChanges // filtered option for autocomplete
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    });
  }

  // unsubscribe to avoid memory leackage
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // on form submit, search selected country then send it to service for other components
  searchCountry(input) {
    let selected = input.value;
    if (selected != null && selected !== '') {
      let selectedCountry = this.countries.filter(country => this._isMatching(country, this._getRegex(selected)))[0];
      if (selectedCountry) {
        this.service.setCountry(selectedCountry);
        this.service.addHistory(selectedCountry);
        this.countryctrl.reset();
      }
    }
  }

  /* Helper function reutrning a match list for search */
  private _filter(value: string): string[] {
    let filterValue = value ? value.toLowerCase() : '';
    if (filterValue.length >= 3) {
      return this.countries.filter(country => this._isMatching(country, this._getRegex(filterValue))).slice(0, 9);
    }
  }
  /* Helper funciton for _filter returns test result for multiple attirbutes of an object*/
  private _isMatching(country: Country, reg: RegExp): boolean {
    return reg.test(country.name.replace(/[^a-zA-Z0-9_\s]/g, '')) || reg.test(country.alpha3Code);
  }

  /* Helper funciton for _filter returning regex expression*/
  private _getRegex(input: string): RegExp {
    input = input.replace(/[^a-zA-Z0-9_\s]/g, '');
    let exp = '(' + input;
    if (input.match(/\s/ig)) {
      let split = input.split(' ');
      exp += '|' + split[0] + '\\w\\s\\(?' + split[1];
    }
    exp += ')';
    return new RegExp(exp, 'ig');
  }
}
