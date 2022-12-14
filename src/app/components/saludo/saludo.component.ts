import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss'],
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {
  @Input() user: string = 'Anónimo';
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();

  myStyle: object = {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  constructor() {}

  ngOnInit(): void {
    //   Instrucciones previas a la renderización del componente
    console.log('ngOnInit del componente Saludo');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Valor anterior:', changes['user'].previousValue);
    console.log('Valor siguiente:', changes['user'].currentValue);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy el componente se va a eliminar');
  }

  /*
   * Ejemplo para gestionar un evento de tipo click en el DOM y enviar un texto al componente padre
   */

  enviarMensajeAlPadre() {
    // alert(`Hola, ${this.user}. Alerta despachada desde un click de botón`);
    this.mensajeEmitter.emit(
      `Hola, ${this.user}. Alerta despachada desde un click de botón`
    );
  }
}

// Orden de ciclo de vida de los componentes:
// * 1. ngOnChanges
// * 2. ngOnInit
//   3. ngAfterContentInit
//   4. ngAfterContentChecked
//   5. ngAfterViewInit
//   6. ngAfterViewChecked
//   7. ngAfterContentChecked
//   8. ngAfterViewChecked
// * 9. ngOnDestroy
