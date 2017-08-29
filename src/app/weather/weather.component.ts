import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { AppSettings } from '../app.settings';
import { WeatherService } from './weather.service';
import { CurrentWeather } from './current.weather';
import { ForecastWeather } from './forecast.weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  d = new Date();
  icons: any;
  currentWeather: CurrentWeather;
  weatherEng: CurrentWeather;
  forecastWeather: ForecastWeather[];
  forecastWeatherEng: ForecastWeather[];
  currentWeatherUrl = AppSettings.OPEN_WEATHER_MAP_URL1 + AppSettings.OPEN_WEATHER_MAP_API;
  currentWeatherUrlEng = AppSettings.OPEN_WEATHER_MAP_URL2 + AppSettings.OPEN_WEATHER_MAP_API;
  forecastWeatherUrl = AppSettings.OPEN_WEATHER_MAP_URL3 + AppSettings.OPEN_WEATHER_MAP_API;
  forecastWeatherUrlEng = AppSettings.OPEN_WEATHER_MAP_URL4 + AppSettings.OPEN_WEATHER_MAP_API;
  iconJsonUrl = AppSettings.ICON_JSON;
  fore = this.getNextDays();
  weekday = ["SONNTAG", "MONTAG", "DIENSTAG", "MITTWOCH", "DONNERSTAG", "FREITAG", "SAMSTAG"];
  forecastDay = [this.weekday[this.fore[0]], this.weekday[this.fore[1]], this.weekday[this.fore[2]], 
                  this.weekday[this.fore[3]], this.weekday[this.fore[4]]];

  constructor(
    private weatherService: WeatherService,
  ) { }

  ngOnInit() {
    this.getCurrentWeather(this.currentWeatherUrl);
    this.getCurrentWeatherEng(this.currentWeatherUrlEng);
    this.getIconJson();
    this.getForecastWeather(this.forecastWeatherUrl);
    this.getForecastWeatherEng(this.forecastWeatherUrlEng);
  }

  getCurrentWeather(url: string): void {
    this.weatherService.getCurrentWeather(url)
        .subscribe(
          (response) => { this.currentWeather = response; },
          (error) => { console.log('Error happened' + error); },
          () => { }
        );
  }

  getCurrentWeatherEng(url: string): void {
    this.weatherService.getCurrentWeather(url)
        .subscribe(
          (response) => { this.weatherEng = response; },
          (error) => { console.log('Error happened' + error); },
          () => { }
        );
  }

  getForecastWeather(url: string): void {
    this.weatherService.getForecastWeather(url)
        .subscribe(
          (response) => { this.forecastWeather = response; },
          (error) => { console.log('Error happened' + error); },
          () => { }
        )
  }

  getForecastWeatherEng(url: string): void {
    this.weatherService.getForecastWeather(url)
          .subscribe(
          (response) => { this.forecastWeatherEng = response; },
          (error) => { console.log('Error happened' + error); },
          () => { }
        )
  }

  getIconJson(): void {
    this.weatherService.getIcons(this.iconJsonUrl)
        .subscribe(
          (response) => { this.icons = response; },
          (error) => { console.log('Error happened' + error); },
          () => { }
        );
  }

  getWeatherIcons(code: string): string {
    let day_night: string;
    const prefix = 'wi wi-';
    const icon = this.icons[code].icon;
    const today = new Date();
    const hour = today.getHours();
    if ( hour > 6 && hour < 20) {
      day_night = 'day-';
    } else {
      day_night = 'night-';
    }
    return prefix + day_night + icon;
  }

  getTime(time: number): string {
    const date = new Date(time * 1000);
    const hours = date.getHours();
    let fixedHours: string;
    if ( hours < 10 ) {
      fixedHours = '0' + hours.toString();
    } else {
      fixedHours = hours.toString();
    }
    const minutes = date.getMinutes();
    let fixedMinutes: string;
    if ( minutes < 10 ) {
      fixedMinutes = '0' + minutes.toString();
    } else {
      fixedMinutes = minutes.toString();
    }
    return fixedHours + ':' + fixedMinutes;
  }

  getNextDays(): Array<number> {
    let d0 = new Date();
    d0.setDate(d0.getDate() + 1);
    let d1 = new Date();
    d1.setDate(d1.getDate() +2);
    let d2 = new Date();
    d2.setDate(d2.getDate() + 3);
    let d3 = new Date();
    d3.setDate(d3.getDate() + 4);
    let d4 = new Date();
    d4.setDate(d4.getDate() + 5);
    return [d0.getDay(), d1.getDay(), d2.getDay(), d3.getDay(), d4.getDay()];
  }

  trimTemperature(temp: number): number {
    return Math.round(temp);
  }
}
