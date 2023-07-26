import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingComponent } from './binding/binding.component';
import { CiclosVidaComponent } from './ciclos-vida/ciclos-vida.component';
import { ClasesComponent } from './clases.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { ComunicacionComponentesComponent } from './comunicacion-componentes/comunicacion-componentes.component';
import { DirectivesComponent } from './directives/directives.component';
import { EjercicioCalculadoraComponent } from './ejercicio-calculadora/ejercicio-calculadora.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { ModelsComponent } from './models/models.component';
import { ModuleComponent } from './module/module.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { RoutejemDosComponent } from './routing/routejem-dos/routejem-dos.component';
import { RoutejemUnoComponent } from './routing/routejem-uno/routejem-uno.component';
import { RoutingComponent } from './routing/routing.component';
import { ServicesComponent } from './services/services.component';
import { ClasesRoutingModule } from './clases-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ComponentesComponent,
    BindingComponent,
    EjercicioCalculadoraComponent,
    DirectivesComponent,
    ClasesComponent, 
    CiclosVidaComponent,
    ComunicacionComponentesComponent,
    RoutingComponent,
    RoutejemUnoComponent,
    RoutejemDosComponent,
    ModelsComponent,
    ServicesComponent,
    HttpclientComponent,
    ReactFormComponent,
    ModuleComponent,
  ],
  imports: [
    CommonModule,
    ClasesRoutingModule,
    SharedModule
  ]
})
export class ClasesModule { }
