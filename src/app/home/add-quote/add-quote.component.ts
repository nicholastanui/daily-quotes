import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Quote} from '../../model/quote';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  newQuote = new Quote(0, '', '', '', new Date());
  @Output() addQuote = new EventEmitter<Quote>();
  constructor() { }

  ngOnInit(): void {
  }
  submitQuote(): void {
    this.addQuote.emit(this.newQuote);

  }

}
