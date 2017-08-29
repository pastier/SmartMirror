import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NewsService {

    constructor(private http: Http) {}

    getNews(url: string): Observable<any> {
        return this.http.get(url)
                    .map(response => response.json())
                    .catch(error => Observable.throw(error.json().error));
    }

}
