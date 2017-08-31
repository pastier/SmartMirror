import { Component, OnInit } from '@angular/core';
import { CalendarService } from './calendar.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  whatDate = new Date();
  whatTime = Observable.interval(1000).map(x => new Date()).share();
  helloiammoto;
  constructor(
    private calendarService: CalendarService) { }

  apiLoaded;
  apiFailed;
  apiReady;

  ngOnInit(): void {
    this.calendarService.loadClient().then(
        result => {
            this.apiLoaded = true;
            return this.calendarService.initClient();
        },
        err => {
            this.apiFailed = true;
        }
    ).then(result => {
        const _self = this;
        this.apiReady = true;
        this.calendarService.listUpcomingEvents().then(
          response => { _self.helloiammoto = response; }
        );
    }, err => {
        this.apiFailed = true;
    });
  }

  formatDate(): string {
    const weekdayAr = ['SONNTAG', 'MONTAG', 'DIENSTAG', 'MITTWOCH', 'DONNERSTAG', 'FREITAG', 'SAMSTAG'];
    const weekday = weekdayAr[this.whatDate.getDay()];
    const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    const month = months[this.whatDate.getMonth()];
    return weekday + ', ' + this.whatDate.getDay() + '.' + month + '.' + this.whatDate.getFullYear();
  }

  calcDayDiff(date: string): number {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date();
    const secondDate = new Date(date);
    const diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
    return diffDays;
  }
}
