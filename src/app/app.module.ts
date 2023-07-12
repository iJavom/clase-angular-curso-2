import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './clases/componentes/componentes.component';
import { BindingComponent } from './clases/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { EjercicioCalculadoraComponent } from './clases/ejercicio-calculadora/ejercicio-calculadora.component';
import { DirectivesComponent } from './clases/directives/directives.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    BindingComponent,
    EjercicioCalculadoraComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
