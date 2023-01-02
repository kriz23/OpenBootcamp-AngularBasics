import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';
import { IContacto } from '../../models/contacto.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss'],
})
export class ListaContactosComponent implements OnInit, OnDestroy {
  //Creamos una lista de contactos
  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;

  //Subscripción de Servicio
  subscription: Subscription | undefined;

  // Inyectamos en el constructor el servicio de Contactos
  constructor(private contactoService: ContactoService) {}

  ngOnInit(): void {
    // Obtener la lista de contactos que nos brinda el servicio
    this.contactoService
      .obtenerContactos()
      .then((lista: IContacto[]) => (this.listaContactos = lista))
      .catch((error) =>
        alert(`Ha habido un error al recuperar la lista de contactos: ${error}`)
      )
      .finally(() => console.log('Petición de lista de contactos terminada'));

    console.table(this.listaContactos);
  }

  obtenerContacto(id: number) {
    // console.log(`Obtener info del contacto: ${id}`);
    this.subscription = this.contactoService
      .obtenerContactoPorID(id)
      ?.subscribe(
        (contacto: IContacto) => (this.contactoSeleccionado = contacto)
      );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
