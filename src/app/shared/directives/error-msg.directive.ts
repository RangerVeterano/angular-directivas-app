import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = '#ff0000'
  @Input() mensaje: string = 'Este campo es requerido'


  //En el constructior recibimos el elemento
  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;

  }
  ngOnChanges(changes: SimpleChanges): void {

    if (changes["mensaje"]) {

      const mensaje = changes["mensaje"].currentValue;
      this.htmlElement.nativeElement.innerText = mensaje;
    }

    if (changes["color"]) {
      const color = changes["color"]?.currentValue;
      this.htmlElement.nativeElement.style.color = color
    }
  }

  ngOnInit(): void {
    this.setColor()
    this.setMensaje()
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color
    this.htmlElement.nativeElement.classList.add('form-text')
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

}
