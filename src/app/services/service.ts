import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject  } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class Service {
    API = 'https://restcountries.eu/rest/v2/all';
    constructor(private http: HttpClient) {}
    private country = new Subject<any>();
    // ref: https://coryrylan.com/blog/angular-observable-data-services
    private _histories = new BehaviorSubject<Country[]>([]);
    private dataStore: { histories: Country[] } = { histories: [] };
    readonly histories = this._histories.asObservable();
    historymap = {};

    /**  getCountries returns a list of all countries */
    getCountries(): Observable<Country[]>{
        return this.http.get(this.API).pipe(map((res: Country[])  => res));
    }

    /**  getCountry returns an observable Country object that is being selected */
    getCountry(): Observable<Country> {
        return this.country.asObservable();
    }

    /**  setCountry takes a Country parameter being selected */
    setCountry(country: Country): void {
        this.country.next(this.format(country));
    }

    /**  getHistory returns a list of observable Countries being searched by user */
    getHistory(): Observable<Country[]> {
        return this.histories;
    }

    /**  addHistory takes a Country object and store it in an observable list of countries being searched (histories) */
    addHistory(country: Country): void {
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

    /** helper function to format country object */
    format(country: Country): ParsedCountry {
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

export type Country = {
    name: string;
    flag: string;
    currencies: [];
    latlng: [];
    area: number;
    alpha2Code: string;
    alpha3Code: string;
}

export type ParsedCountry = {
    name: string;
    flag: string;
    currencies: [];
    latlng: [];
    area: number;
    alpha2Code: string;
}

