import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Service } from '../service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'country-info',
  templateUrl: './country.componenet.html',
  styleUrls: ['./country.componenet.css']
})
export class CountryInfoComponent implements OnInit {
  country;
  subscription: Subscription;

  constructor(private service: Service) {
    // subscribe to home component messages
    this.subscription = this.service.getCountry().subscribe(country => { this.country = country; });
  }

  ngOnInit() {
    this.country = new MatTableDataSource<Country>();

    // @Input() model;
    // @HostBinding('class') columnClass = 'four wide column';
  }
}

export interface Country {
  name: string;
  flag: number;
  currency: number;
  latlong: string;
  landarea: string;
  iso: string;
}