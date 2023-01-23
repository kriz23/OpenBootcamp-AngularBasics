import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-ejemplo-animacion',
  templateUrl: './ejemplo-animacion.component.html',
  styleUrls: ['./ejemplo-animacion.component.scss'],
  // Metadatos para animación del componente
  animations: [
    trigger('animaciones', [
      state(
        'active',
        style({
          transform: 'translate(10px, 20px)',
        })
      ),
      state(
        'inactive',
        style({
          transform: 'translate(40px, 50px)',
        })
      ),
      state(
        'sube',
        style({
          transform: 'translateY(-10px)',
          backgroundColor: 'green',
        })
      ),
      state(
        'baja',
        style({
          transform: 'translateY(10px)',
          backgroundColor: 'blue',
        })
      ),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out')),
      transition('active => sube', animate('1000ms ease-in')),
      transition('active => baja', animate('1000ms ease-in')),
      transition('inactive => sube', animate('1000ms ease-in')),
      transition('inactive => baja', animate('1000ms ease-in')),
      transition('sube => active', animate('1000ms ease-in')),
      transition('sube => inactive', animate('1000ms ease-in')),
      transition('baja => active', animate('1000ms ease-in')),
      transition('baja => inactive', animate('1000ms ease-in')),
      transition('sube => baja', animate('1000ms ease-in')),
      transition('baja => sube', animate('1000ms ease-out')),
    ]),
  ],
})
export class EjemploAnimacionComponent implements OnInit {
  state: string = '';

  constructor() {}

  ngOnInit(): void {
    // setInterval(() => {
    //   if (this.state == 'active') {
    //     this.state = 'inactive';
    //   } else {
    //     this.state = 'active';
    //   }
    // }, 1000);
  }

  cambiarEstadoActivado() {
    if (this.state == 'active') {
      this.state = 'inactive';
    } else {
      this.state = 'active';
    }
  }

  subir() {
    this.state = 'sube';
  }

  bajar() {
    this.state = 'baja';
  }
}
