import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjemploService } from './services/ejemplo.service';
import { ProductoService } from './services/producto.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriaService } from './services/categoria.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    EjemploService,
    ProductoService,
    CategoriaService
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
