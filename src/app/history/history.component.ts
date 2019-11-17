import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.componenet.html',
  styleUrls: ['./history.componenet.css']
})
export class HistoryComponent implements OnInit {
  histories;
  subscription: Subscription;

  constructor(private service: Service) {
    // subscribe to app component messages
    this.subscription = this.service.getHistory().subscribe(data => {
      console.log(data);
      if (data !== undefined) {
        this.histories = data;
      }
    });
  }

  ngOnInit() {
  }
}

