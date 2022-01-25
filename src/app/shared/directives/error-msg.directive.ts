import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit {

  constructor() {
    console.log('constructor directive');
  }

  ngOnInit(): void {
    console.log('ngOnInit en la directiva');
  }

}
