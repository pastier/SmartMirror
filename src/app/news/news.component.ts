import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../app.settings';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsUrl = AppSettings.NEWS_RSS_URL;
  response: any;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews(this.newsUrl);
  }

  getNews(url: string): void {
    this.newsService.getNews(url)
        .subscribe(
          (response) => { this.response = response; },
          (error) => { console.log('Error happened' + error); },
          () => { }
        );
  }

}
