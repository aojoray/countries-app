import { Component, OnInit, OnDestroy } from '@angular/core';
import { Service } from './service';
import { FormControl, FormGroup } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, startWith, count } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'countries-app';
  histories = ['Hello', 'World'];
  countries = [];
  show = true;
  countryctrl = new FormControl();
  countryform = new FormGroup({
    countryctrl: new FormControl()
  });

  country = {};
  subscription: Subscription;

  // myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(private service: Service) {}
  // constructor(public http: Http) { }
  results: any[] = [];
  queryField: FormControl = new FormControl();

  ngOnInit() {
    // this.http.get('https://restcountries.eu/rest/v2/all')
    //   .pipe(map((res: Response) => res.json()))
    //   .subscribe(data => {
    //     this.countries = data;
    //     this.filteredOptions = this.countryctrl.valueChanges
    //       .pipe(
    //         startWith(''),
    //         map(value => this._filter(value))
    //       );
    //   });
    this.service.getCountries().subscribe(res => {
      this.countries = res;
      this.filteredOptions = this.countryctrl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    });
    // this.service.getCountries()
    // .pipe(map((res: Response) => res.json()))
    // .subscribe(data => {
    //   this.countries = data;
    //   this.filteredOptions = this.countryctrl.valueChanges
    //     .pipe(
    //       startWith(''),
    //       map(value => this._filter(value))
    //     );
    // });
    // await this.webService.getCountry().then(data => {
    //   this.countries = data;
    //   // console.log(this.countries);
    //   // console.log(data);
    // });
    // this.countries = await this.webService.getCountry();

    // this.filteredOptions = this.myControl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(value => this._filter(value))
    //   );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log(value);
    console.log(value[0]);
    console.log(this.countries.filter(country => country.name.toLowerCase().includes(filterValue)));
    return this.countries.filter(country => country.name.toLowerCase().includes(filterValue));
    // return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  searchCountry(input) {
    // console.log(input);
    let selected = input.value;
    console.log(selected);
    if (selected != null && selected !== '') {
      this.histories.push(selected);
      console.log(this.countries.filter(country => country.name.toLowerCase().includes(selected.toLowerCase())));
      this.service.setCountry(this.countries.filter(country => country.name.toLowerCase().includes(selected.toLowerCase()))[0]);
      input.value = '';
      this.show = true;
    }
  }
  searchCountrySubmit(value: any) {
    console.log(value);
    // console.log(value.input);
    // console.log(value.value);
    // if (value.country != null && value.country !== '') {
    //   this.histories.push(value.country);
    // }
  }

}
