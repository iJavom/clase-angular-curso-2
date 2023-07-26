import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjemploService } from './services/ejemplo.service';
import { ProductoService } from './services/producto.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    EjemploService,
    ProductoService
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
