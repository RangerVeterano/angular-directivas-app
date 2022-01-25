import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf(condicion: boolean) {

    if (condicion) {
      this.vc.createEmbeddedView(this.tr)
    } else {
      this.vc.clear()
    }
  }

  //Inyectamos los servicios que nos van a permitir porder ver la plantilla
  //Y tambien el que va a mostrar o ocultar la plantilla
  constructor(
    private tr: TemplateRef<HTMLElement>,
    private vc: ViewContainerRef
  ) {

  }

}
