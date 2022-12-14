import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'HolaMundo';
  user = '@kriz23';

  /* Esta función se ejecutará cuándo en el hijo (Saludo Component) se pulse un botón */
  recibirMensajeDelHijo(evento: string) {
    alert(evento);
  }
}
