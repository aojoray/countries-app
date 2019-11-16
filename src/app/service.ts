import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {
    API = 'https://restcountries.eu/rest/v2/all';
    constructor(private http: Http) { }
    getCountry() {
        return new Promise((resolve, reject) => {
            this.http.get(this.API).subscribe(res => {
                // console.log(res.json());
                // return res.json();
                resolve(res.json());
            });
        });
    }
}


// import { Injectable } from '@angular/core';

// @Injectable({
//     providedIn: 'root'
// })
// export class ServiceService {

//     constructor() { }
// }
