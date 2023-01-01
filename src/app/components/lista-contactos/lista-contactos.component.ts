import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';
import { IContacto } from '../../models/contacto.interface';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss'],
})
export class ListaContactosComponent implements OnInit {
  //Creamos una lista de contactos
  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;

  // Inyectamos en el constructor el servicio de Contactos
  constructor(private contactoService: ContactoService) {}

  ngOnInit(): void {
    // Obtener la lista de contactos que nos brinda el servicio
    this.listaContactos = this.contactoService.obtenerContactos();

    console.table(this.listaContactos);
  }

  obtenerContacto(id: number) {
    // console.log(`Obtener info del contacto: ${id}`);
    this.contactoSeleccionado = this.contactoService.obtenerContactoPorID(id);
  }
}
