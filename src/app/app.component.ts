import { Component, OnInit, OnDestroy } from '@angular/core';
import { Service } from './service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
// import { , Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'countries-app';
  countries = [];
  show = true;
  countryctrl = new FormControl();
  countryform = new FormGroup({
    countryctrl: new FormControl()
  });

  country = {};
  subscription: Subscription;

  filteredOptions: Observable<string[]>;

  constructor(private service: Service) {}
  results: any[] = [];
  queryField: FormControl = new FormControl();
  ngOnInit() {

    this.service.getCountries().subscribe(res => {
      this.countries = res;
      this.filteredOptions = this.countryctrl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private _filter(value: string): string[] {
    const filterValue = value ? value.toLowerCase() : '';
    if (filterValue.length >= 3) {
      return this.countries.filter(country => country.name.toLowerCase().indexOf(filterValue) === 0).slice(0, 9);
    }
  }


  searchCountry(input) {
    let selected = input.value;
    if (selected != null && selected !== '') {
      let selectedCountry = this.countries.filter(country => country.name.toLowerCase().includes(selected.toLowerCase()))[0];
      this.service.setCountry(selectedCountry);
      this.service.addHistory(selectedCountry);
      this.countryctrl.reset();
      this.show = true;
    }
  }
}
