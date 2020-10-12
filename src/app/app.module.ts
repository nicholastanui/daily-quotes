import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddQuoteComponent } from './home/add-quote/add-quote.component';
import { QuoteDetailsComponent } from './home/quote-details/quote-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddQuoteComponent,
    QuoteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
