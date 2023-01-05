import { Component, OnInit } from '@angular/core';

// Ejemplo básico de formulario reactivo
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  // Definimos nuestro formulario
  miFormulario: FormGroup = new FormGroup<any>({});

  // Inyectamos la clase FormBuilder para poder construir el FormGroup
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Iniciamos los campos del formulario y sus valores por defecto
    this.miFormulario = this.formBuilder.group({
      nombre: '',
      apellidos: '',
      email: '',
      telefono: '',
      direccion: '',
    });

    // Nos suscribimos a los cambios que ocurran en el formulario y los mostramos por consola
    this.miFormulario.valueChanges.subscribe(console.log);
  }
}
