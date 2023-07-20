import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/models/producto.model';
import { ProductoService } from 'src/app/shared/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto : Producto = new Producto();

  constructor(private productoService : ProductoService) { }

  ngOnInit(): void {
  }

  guardar(){
    this.productoService.crearProducto(this.producto).subscribe(
      (data)=>{
        alert('Producto guardado exitosamente');

      },
      (error)=>{
        alert('Error guardando');
      }
    );
  }

}
