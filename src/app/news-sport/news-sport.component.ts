import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../app.settings';
import { NewsSportService } from './news-sport.service';

@Component({
  selector: 'app-news-sport',
  templateUrl: './news-sport.component.html',
  styleUrls: ['./news-sport.component.css']
})
export class NewsSportComponent implements OnInit {

  sportNewsUrl = AppSettings.SPORT_NEWS_FUSSBALL_RSS_URL;
  response: any;

  constructor(private newsSportService: NewsSportService) { }

  ngOnInit() {
    this.getSportNews(this.sportNewsUrl);
  }

  getSportNews(url: string): void {
    this.newsSportService.getSportNews(url)
          .subscribe(
            (response) => { this.response = response; },
            (error) => { console.log('Error happened' + error); },
            () => { }
          );
  }

  trimSportNews(news: string): string {
    return news.substring(0, 70);
  }

}
