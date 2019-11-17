import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable()
export class Service {
    API = 'https://restcountries.eu/rest/v2/all';
    // constructor(private http: Http) { }
    constructor(private http: Http) {
        this.getCountries();
    }
    // private country = new Subject<Country>();
    private country = new Subject<any>();


    getCountries() {
        return this.http.get(this.API).pipe(map((res: Response)  => res.json()));
    }

    getCountry(): Observable<Country> {
        return this.country.asObservable();
    }
    setCountry(country: Country) {
        console.log('SET!! ', country);
        this.country.next(this.format(country));
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
}

