import { Injectable } from '@angular/core';

//Importamos la lista de contactos MOCK
import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/contacto.interface';

//Importamos Oberservables de rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  constructor() {}

  obtenerContactos(): Promise<IContacto[]> {
    return Promise.resolve(CONTACTOS); // Nos devuelve un listado de contactos
  }

  obtenerContactoPorID(id: number): Observable<IContacto> | undefined {
    // Buscamos el contacto por ID dentro de la lista de CONTACTOS mockeados
    const contacto = CONTACTOS.find(
      (contacto: IContacto) => contacto.id === id
    );

    // Creamos un observable que nos devuelva el contacto
    let observable: Observable<IContacto> = new Observable((observer) => {
      observer.next(contacto); // Emitir un valor a los componentes que estén suscritos
      observer.complete(); // Indicar que la emisión de valores ha terminado
    });

    if (contacto) {
      return observable;
    } else {
      return;
    }
  }
}
