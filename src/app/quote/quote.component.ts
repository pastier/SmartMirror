import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../app.settings';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quoteUrl = AppSettings.QUOTES_RSS_URL;
  response: any;
  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.getQuote(this.quoteUrl);
  }

  getQuote(url: string): void {
    this.quoteService.getQuote(url)
          .subscribe(
            (response) => { this.response = response; },
            (error) => { console.log('Error happened' + error ); },
            () => { }
          );
  }

}
