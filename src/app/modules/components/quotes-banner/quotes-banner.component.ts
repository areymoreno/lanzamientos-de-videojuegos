import { Component } from '@angular/core';
import { Quotes } from 'src/app/utils/quotes';

@Component({
  selector: 'app-quotes-banner',
  templateUrl: './quotes-banner.component.html'
})
export class QuotesBannerComponent {
  quoteRandom: string = "";
  quoteAuthor: string = "";
  quoteGame: string = "";

  quotesCustom: any[] = Quotes.QUOTES_GAMES;

  constructor() {
    this.getRandomQuote();
  }

  getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotesCustom.length);
    this.quoteRandom = this.quotesCustom[randomIndex].quote;
    this.quoteAuthor = this.quotesCustom[randomIndex].author;
    this.quoteGame = this.quotesCustom[randomIndex].game || "";
  }

}
