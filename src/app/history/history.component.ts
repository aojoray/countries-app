import { Component, OnDestroy } from '@angular/core';
import { Service } from '../service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.componenet.html',
  styleUrls: ['./history.componenet.css']
})

/** HistoryComponent is responsible for displaying histories section */
export class HistoryComponent implements OnDestroy {
  histories;
  country;
  subscription: Subscription;

  constructor(private service: Service) {
    // subscribe to app component messages (search histories)
    this.subscription = this.service.getHistory().subscribe(data => {
      if (data !== undefined && data.length > 0) {
        this.histories = data;
      }
    });
  }

  /**
   * Handling click event of history element. Sets new selected country to display on CountryInfo component
   * @param country: selected country
   */
  loadInfo(country) {
    this.service.setCountry(country);
  }

  // unsubscribe to avoid memory leackage
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

