import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective,
    CustomIfDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorMsgDirective, //Como lo vamos a emplear fuera de este sitio lo tenemo que exportar
    CustomIfDirective
  ]
})
export class SharedModule { }
