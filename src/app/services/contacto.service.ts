import {Injectable} from '@angular/core';

//Importamos la lista de contactos MOCK
import {CONTACTOS} from '../mocks/contactos.mock';
import {IContacto} from '../models/contacto.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  constructor() {
  }

  obtenerContactos(): IContacto[] {
    return CONTACTOS; // Nos devuelve un listado de contactos
  }

  obtenerContactoPorID(id: number): IContacto | undefined {

    // Buscamos el contacto por ID dentro de la lista de CONTACTOS mockeados
    const contacto = CONTACTOS.find(
      (contacto: IContacto) => contacto.id === id
    );

    if (contacto) {
      return contacto;
    } else {
      return;
    }
  }
}
