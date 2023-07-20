import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './clases/componentes/componentes.component';
import { BindingComponent } from './clases/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { EjercicioCalculadoraComponent } from './clases/ejercicio-calculadora/ejercicio-calculadora.component';
import { DirectivesComponent } from './clases/directives/directives.component';
import { ClasesComponent } from './clases/clases.component';
import { TiendaComponent } from './tienda/tienda.component';
import { NavbarComponent } from './tienda/navbar/navbar.component';
import { InicioComponent } from './tienda/inicio/inicio.component';
import { CatalogoComponent } from './tienda/catalogo/catalogo.component';
import { NosotrosComponent } from './tienda/nosotros/nosotros.component';
import { ContactanosComponent } from './tienda/contactanos/contactanos.component';
import { CiclosVidaComponent } from './clases/ciclos-vida/ciclos-vida.component';
import { ComunicacionComponentesComponent } from './clases/comunicacion-componentes/comunicacion-componentes.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { RoutingComponent } from './clases/routing/routing.component';
import { RoutejemUnoComponent } from './clases/routing/routejem-uno/routejem-uno.component';
import { RoutejemDosComponent } from './clases/routing/routejem-dos/routejem-dos.component';
import { ModelsComponent } from './clases/models/models.component';
import { ServicesComponent } from './clases/services/services.component';
import { EjemploService } from './shared/services/ejemplo.service';
import { HttpclientComponent } from './clases/httpclient/httpclient.component';
import { HttpClientModule } from '@angular/common/http';
import { TarjetaComponent } from './tienda/catalogo/tarjeta/tarjeta.component';
import { ProductoComponent } from './tienda/producto/producto.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    BindingComponent,
    EjercicioCalculadoraComponent,
    DirectivesComponent,
    ClasesComponent,
    TiendaComponent,
    NavbarComponent,
    InicioComponent,
    CatalogoComponent,
    NosotrosComponent,
    ContactanosComponent,
    CiclosVidaComponent,
    ComunicacionComponentesComponent,
    NoEncontradoComponent,
    RoutingComponent,
    RoutejemUnoComponent,
    RoutejemDosComponent,
    ModelsComponent,
    ServicesComponent,
    HttpclientComponent,
    TarjetaComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EjemploService],
  bootstrap: [AppComponent]
})
export class AppModule { }
