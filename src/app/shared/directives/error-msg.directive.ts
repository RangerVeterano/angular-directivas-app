import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = '#FF0000'
  private _mensaje: string = 'Este es un campo requerido'

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor: string) {
    this._color = valor; //Cambiamos el color 
    //Asignamos el color que recibimos al elemento
    this.setColor(this._color);
  }

  // @Input() mensaje: string = 'Este campo es requerido'
  @Input() set mensaje(valor: string) {
    this._mensaje = valor;
    this.setMensaje(this._mensaje);
  }

  @Input() set valido(valor: boolean) {
    if (!valor) {
      this.htmlElement.nativeElement.classList.add('d-none');
    } else {

      this.htmlElement.nativeElement.classList.remove('d-none');
    }
  }

  //En el constructior recibimos el elemento
  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;

  }
  ngOnChanges(changes: SimpleChanges): void {

    // if (changes["mensaje"]) {

    //   const mensaje = changes["mensaje"].currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }

    // if (changes["color"]) {
    //   const color = changes["color"]?.currentValue;
    //   this.htmlElement.nativeElement.style.color = color
    // }
  }

  ngOnInit(): void {
    this.setColor(this._color)
    this.setMensaje(this._mensaje)
    this.setEstilo()
  }

  setEstilo(): void {

    this.htmlElement.nativeElement.classList.add('form-text')
  }

  setColor(color: string): void {
    this.htmlElement.nativeElement.style.color = color
  }

  setMensaje(mensaje: string): void {
    this.htmlElement.nativeElement.innerText = mensaje;
  }

}
