import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countries-app';
  histories = [];
  searchCountry(input) {
    let country = input.value;
    if (country != null && country !== '') {
      this.histories.push(country);
      input.value = '';
    }
  }
  searchCountrySubmit(value: any) {
    console.log(value);
    if (value.country != null && value.country !== '') {
      this.histories.push(value.country);
    }
  }
}
