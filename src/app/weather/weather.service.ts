import { CurrentWeather } from './current.weather';
import { ForecastWeather } from './forecast.weather';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeatherService {

    constructor(private http: Http) {}

    getCurrentWeather(url: string): Observable<CurrentWeather> {
        return this.http.get(url)
                    .map(response => response.json() as CurrentWeather)
                    .catch(error => Observable.throw(error.json().error));
    }

    getForecastWeather(url: string): Observable<ForecastWeather[]> {
        return this.http.get(url)
                    .map(response => response.json() as ForecastWeather[])
                    .catch(error => Observable.throw(error.json().error));
    }

    getIcons(url: string): Observable<JSON> {
        return this.http.get(url)
                    .map(response => response.json())
                    .catch(error => Observable.throw(error.json().error));
    }
}
