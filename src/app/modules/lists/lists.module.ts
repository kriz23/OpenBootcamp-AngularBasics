import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaBasicaComponent } from './lista-basica/lista-basica.component';

@NgModule({
  declarations: [ListaBasicaComponent],
  imports: [CommonModule],
  exports: [
    // Exportamos el componente para que pueda ser usado en otros módulos
    ListaBasicaComponent,
  ],
})
export class ListsModule {}
