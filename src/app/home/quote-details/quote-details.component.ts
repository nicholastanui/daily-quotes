import {Component, Input, OnInit} from '@angular/core';
import {Quote} from '../../model/quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quote;
  constructor() { }

  ngOnInit(): void {
  }

  upVote(quote: Quote): void {
    quote.upVote += 1;
  }

  downVote(quote: Quote): void {
    quote.downVote += 1;
  }

}
