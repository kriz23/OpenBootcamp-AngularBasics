import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { ListsModule } from './modules/lists/lists.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { FormularioComponent } from './components/forms/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { EjemploAnimacionComponent } from './components/ejemplo-animacion/ejemplo-animacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modulos angular material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

// Pipes personalizados
import { MultiplicaPipe } from './pipes/multiplica.pipe';
import { CalcularPuntuacionPipe } from './pipes/calcular-puntuacion.pipe';

// Locale para PIPES
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
registerLocaleData(localeES); // Registramos el LOCALE_ID de 'es' para poder usarlo en los pipes

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    EjemploPipesComponent,
    MultiplicaPipe,
    CalcularPuntuacionPipe,
    EjemploAnimacionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Necesario para el doubleBinding [(ngModel)]
    ListsModule, // Importamos nuestro módulo personalizado (creado por nosotros)
    HttpClientModule,
    ReactiveFormsModule, // Necesario para los formularios reactivos
    // Importamos los módulos de AngularMaterial que usamos en los formularios
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [
    // Registrar el localeES para que los pipes salgan en español
    { provide: LOCALE_ID, useValue: 'es' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
