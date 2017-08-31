import { Injectable } from '@angular/core';
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AppSettings } from '../app.settings';

declare var gapi: any;

@Injectable()
export class CalendarService {

    constructor(
        private zone: NgZone) {}

    loadClient(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.zone.run(() => {
                gapi.load('client', {
                    callback: resolve,
                    onerror: reject,
                    timeout: 1000, // 5 seconds.
                    ontimeout: reject
                });
            });
        });
    }

    initClient(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.zone.run(() => {
            gapi.client.init({
                    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
                    clientId: AppSettings.GOOGLE_CALENDAR_API,
                    scope: 'https://www.googleapis.com/auth/calendar.readonly'
                }).then(resolve, reject);
            });
        });
    }

    listUpcomingEvents(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.zone.run(() => {
                gapi.client.calendar.events.list({
                    'calendarId': 'primary',
                    'timeMin': (new Date()).toISOString(),
                    'showDeleted': false,
                    'singleEvents': true,
                    'maxResults': 10,
                    'orderBy': 'startTime'
                }).then(resolve, reject);
            });
        });
    }
}
