import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgDirective } from './directives/error-msg.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorMsgDirective //Como lo vamos a emplear fuera de este sitio lo tenemo que exportar
  ]
})
export class SharedModule { }
