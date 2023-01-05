import { Component, OnInit } from '@angular/core';
import { IJugador } from '../../models/jugador.interface';
import { IContacto } from '../../models/contacto.interface';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.scss'],
})
export class EjemploPipesComponent implements OnInit {
  dob: Date = new Date(1991, 9, 14);
  cambio: boolean = true;
  nombre: string = 'Cris';
  numero_PI: number = 3.14159265359;
  precioCarrito: number = 100;
  persona: IContacto = {
    id: 0,
    nombre: 'Cristhian',
    apellidos: 'González',
    edad: 22,
    email: 'cris@test.com',
  };
  cantidad: number = 0.3512;
  textoLargo: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eleifend magna, at tristique purus suscipit sed. Pellentesque luctus nibh enim, at ultricies dui euismod quis. Duis dapibus, justo eget dignissim gravida, nisl ligula sodales dolor, sit amet porta odio augue sit amet mi. Integer sed elit eros. Sed sit amet lectus at leo ultricies lobortis. Nam consectetur vehicula massa vulputate condimentum. Cras varius congue vehicula. Aenean sit amet risus in lorem convallis maximus in in quam.';

  // Ejemplo para Pipe Calcular Puntuación
  jugador1: IJugador = {
    nombre: 'Cristhian',
    puntos: [10, 30, 40, 0],
  };
  jugador2: IJugador = {
    nombre: 'Pepe',
    puntos: [0, 80, 10, 5],
  };

  constructor() {}

  get dateFormat() {
    return this.cambio ? 'shortDate' : 'fullDate';
  }

  ngOnInit(): void {}

  cambiarFormato() {
    this.cambio = !this.cambio;
  }
}
