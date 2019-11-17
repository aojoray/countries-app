import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Service } from '../service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-info',
  templateUrl: './country.componenet.html',
  styleUrls: ['./country.componenet.css']
})
export class CountryInfoComponent implements OnInit {
  country;
  subscription: Subscription;
  labels = { 'Name': 'name', 'Currency': 'currencies', 'Lat/Long': 'latlng', 'Land Area': 'area'};
  // labels = { 'Flag': 'flag', 'Name': 'name', 'Currency': 'currencies', 'Lat/Long': 'latlng', 'Land Area': 'area'};
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
      let cont;
      switch (k) {
        case 'Currency':
          cont = data[this.labels[k]][0].code + ' / ' + data[this.labels[k]][0].symbol;
          break;
        case 'Lat/Long':
          cont = data[this.labels[k]].join(' / ');
          break;
        default:
          cont = data[this.labels[k]];
          break;
      }
      let row = {
        key: k,
        content: cont
      };
      temp.push(row);
    });
    return new MatTableDataSource(temp);
  }

  ngOnInit() {
  }
}

