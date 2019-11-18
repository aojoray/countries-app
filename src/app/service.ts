import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject  } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class Service {
    API = 'https://restcountries.eu/rest/v2/all';
    constructor(private http: Http) {
        // this.getCountries();
    }
    private country = new Subject<any>();
    // ref: https://coryrylan.com/blog/angular-observable-data-services
    private _histories = new BehaviorSubject<Country[]>([]);
    private dataStore: { histories: Country[] } = { histories: [] };
    readonly histories = this._histories.asObservable();
    historymap = {};

    getCountries() {
        return this.http.get(this.API).pipe(map((res: Response)  => res.json()));
    }

    getCountry(): Observable<Country> {
        return this.country.asObservable();
    }
    setCountry(country: Country) {
        this.country.next(this.format(country));
    }

    getHistory(): Observable<Country[]> {
        return this.histories;
    }
    addHistory(country: Country) {
        if (!this.historymap[country.alpha3Code]) {
            this.historymap[country.alpha3Code] = 1;
            if (this.dataStore.histories.length === 10) {
                this.dataStore.histories.pop();
            }
            let temp = [country];
            this.dataStore.histories = temp.concat(this.dataStore.histories);
            this._histories.next(Object.assign({}, this.dataStore).histories);
        }
    }


    format(country: Country) {
        let parsed = {
            name: country.name,
            flag: country.flag,
            currencies: country.currencies,
            latlng: country.latlng,
            area: country.area,
            alpha2Code: country.alpha2Code
        };
        return parsed;
    }
}

export interface Country {
    name: string;
    flag: string;
    currencies: [];
    latlng: [];
    area: number;
    alpha2Code: string;
    alpha3Code: string;
}

