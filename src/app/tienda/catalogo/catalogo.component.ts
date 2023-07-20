import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/models/producto.model';
import { ProductoService } from 'src/app/shared/services/producto.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  productos:Producto[] = [];

  constructor(private productosService: ProductoService) {}

  ngOnInit(): void {
    this.productosService.obtenerProductos().subscribe(
      (data)=>{ //Next: Sirve para capturar la respuesta en caso de ser exitoso
        this.productos = data;
      },
      (error)=>{//Error: Sirve para capturar los mensajes de error
        alert(error.message);
      },
      ()=>{//Complete: Sirve para ejecutar algo haya sido exitoso o no

      }
    );
  }
}
