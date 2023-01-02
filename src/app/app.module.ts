import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { ListsModule } from './modules/lists/lists.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';

@NgModule({
  declarations: [AppComponent, SaludoComponent, ListaContactosComponent, LoginFormComponent],
  imports: [BrowserModule, FormsModule, ListsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
