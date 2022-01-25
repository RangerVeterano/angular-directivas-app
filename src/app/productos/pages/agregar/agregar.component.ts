import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  //Variable para cambiar el mensaje
  texto1: string = 'Nombre falso para cambiar'

  color: string = '#00ff00'

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  tieneErrores(arg: string) {
    return this.miFormulario.get(arg)?.invalid
  }

  cambiarNombre() {
    this.texto1 = 'Ignacio Bohigues';
  }

  cambiarColor() {
    this.color = '#3020ff';
  }

}
