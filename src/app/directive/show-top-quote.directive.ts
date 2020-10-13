import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appShowTopVote]'
})
export class ShowTopQuoteDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor = '#d1ecf1';
    this.elem.nativeElement.style.color = '#0c5460';
    this.elem.nativeElement.style.borderColor = '#bee5eb';
  }

}
