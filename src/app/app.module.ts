import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NewsComponent } from './news/news.component';
import { NewsSportComponent } from './news-sport/news-sport.component';
import { QuoteComponent } from './quote/quote.component';

import { WeatherService } from './weather/weather.service';
import { NewsService } from './news/news.service';
import { NewsSportService } from './news-sport/news-sport.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CalendarComponent,
    NewsComponent,
    NewsSportComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    WeatherService,
    NewsService,
    NewsSportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
