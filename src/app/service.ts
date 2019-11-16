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
    private country = new Subject<any>();

    getCountries() {
        return this.http.get(this.API).pipe(map((res: Response)  => res.json()));
    }

    getCountry(): Observable<any> {
        return this.country.asObservable();
    }
    setCountry(country: object) {
        console.log('SET!! ', country);
        this.country.next(country);
    }
}

