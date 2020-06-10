import { Component, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Service, Country } from '../services/service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-info',
  templateUrl: './country.componenet.html',
  styleUrls: ['./country.componenet.css']
})

/** CountryInfoComponent is responsible for displaying information of selected countries */
export class CountryInfoComponent implements OnDestroy{
  country; // selected country
  subscription: Subscription;
  labels = { 'Name': 'name', 'Currency Name': 'currencies', 'Latitude/longitude': 'latlng', 'Land Area': 'area'}; // Labels of table
  columnsToDisplay = ['key', 'content'];
  transformed; // transformed data for table
  constructor(private service: Service) {
    // subscribe to app component messages (selected country)
    this.subscription = this.service.getCountry().subscribe(data => {
      if (data !== undefined) {
        this.country = data;
        this.transformed = this.transformData(data);
      }
    });
  }

  // unsubscribe to avoid memory leackage
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * Format country data to display on mat-table. This function creates a list of rows.
   * @param data: country object
   */
  transformData(data: Country): MatTableDataSource<Row> {
    let temp=[];
    Object.keys(this.labels).forEach(k => {
      let row: Row = {
        key: k,
        content: this._format(k, data[this.labels[k]])
      };
      temp.push(row);
    });
    return new MatTableDataSource(temp);
  }

  /**
   * Helper function for formating data depending on spec
   * @param k: key of row
   * @param value: value of row
   */
  private _format(k: Row["key"], value: Row["content"]): string | number {
    let cont;
    switch (k) {
      case 'Currency Name':
        cont = value[0].name + ' (' + value[0].symbol + ')';
        break;
      case 'Latitude/longitude':
        cont = value && typeof value === 'object' && value.length > 0 ? value.join(' / ') : 'unknown';
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

type Row = {
  key: string;
  content: string | number | number[];
}

