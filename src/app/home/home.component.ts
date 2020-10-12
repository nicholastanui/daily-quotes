import { Component, OnInit } from '@angular/core';
import {Quote} from '../model/quote';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Quote1', 'author1', 'sub1', new Date(2020, 3, 22)),
    new Quote(2, 'Quote2', 'author2', 'sub2', new Date(2020, 1, 10)),
    new Quote(3, 'Quote3', 'author3', 'sub3', new Date(2020, 7, 1)),
    new Quote(4, 'Quote4', 'author4', 'sub4', new Date(2020, 10, 29)),
    new Quote(15, 'Quote5', 'author5', 'sub5', new Date(2020, 4, 6))
  ];
  constructor() { }

  ngOnInit(): void {

  }

  toggleDetails(index): void {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  addQuote(quote: Quote): void {
    const quoteSize = this.quotes.length;
    quote.id = quoteSize + 1;
    quote.created = new Date(quote.created);
    this.quotes.push(quote);
  }

  deleteQuote(index): void {
    this.quotes.splice(index, 1);
  }

}
