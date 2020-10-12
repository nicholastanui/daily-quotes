import { Component, OnInit } from '@angular/core';
import {Quote} from '../model/quote';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Quote1', 'author1', new Date(2020, 3, 22)),
    new Quote(2, 'Quote2', 'author2', new Date(2020, 1, 10)),
    new Quote(3, 'Quote3', 'author3', new Date(2020, 7, 1)),
    new Quote(4, 'Quote4', 'author4', new Date(2020, 10, 29)),
    new Quote(15, 'Quote5', 'author5', new Date(2020, 4, 6))
  ];
  constructor() { }

  ngOnInit(): void {

  }

  toggleDetails(index): void {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

}
