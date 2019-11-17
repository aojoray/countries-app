import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Service } from '../service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-info',
  templateUrl: './country.componenet.html',
  styleUrls: ['./country.componenet.css']
})
export class CountryInfoComponent {
  country;
  subscription: Subscription;
  labels = { 'Name': 'name', 'Currency Name': 'currencies', 'Latitude/longitude': 'latlng', 'Land Area': 'area'};
  columnsToDisplay = ['key', 'content'];
  transformed;
  constructor(private service: Service) {
    // subscribe to app component messages
    this.subscription = this.service.getCountry().subscribe(data => {
      console.log(data);
      if (data !== undefined) {
        this.country = data;
        this.transformed = this.transformData(data);
      }
    });
  }

  transformData(data) {
    let temp=[];
    Object.keys(this.labels).forEach(k => {
      let row = {
        key: k,
        content: this.format(k, data[this.labels[k]])
      };
      temp.push(row);
    });
    return new MatTableDataSource(temp);
  }

  format(k, value) {
    let cont;
    switch (k) {
      case 'Currency Name':
        cont = value[0].name + ' (' + value[0].symbol + ')';
        break;
      case 'Latitude/longitude':
        cont = value && value.length > 0 ? value.join(' / ') : 'unknown';
        break;
      case 'Land Area':
        cont = value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '	\u33A2' : 'unknown';
        break;
      default:
        cont = value;
        break;
    }
    return cont;
  }
}

