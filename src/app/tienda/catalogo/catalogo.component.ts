import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/models/producto.model';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { ProductoService } from 'src/app/shared/services/producto.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  productos:Producto[] = [];
  cantidadPorPagina:number = 20;
  categorias:string[] = [];
  categoriaSeleccionada: string | null = null;
  loading = false;
  
  constructor(private productosService: ProductoService,
    private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.productosService.obtenerProductos().subscribe(
      (data)=>{ //Next: Sirve para capturar la respuesta en caso de ser exitoso
        this.productos = data;
      },
      (error)=>{//Error: Sirve para capturar los mensajes de error
        alert("El servidor arrojo un mensaje: "+JSON.stringify(error));
      },
      ()=>{//Complete: Sirve para ejecutar algo haya sido exitoso o no

      }
    );

    this.categoriaService.obtenerCategorias().subscribe(
      (data)=>{
        this.categorias = data;
      },
      (error)=>{
        alert('Error en el servidor');
      }
    );
  }

  refrescar(){
    this.productosService.obtenerProductos(this.cantidadPorPagina,this.categoriaSeleccionada?? '').subscribe(
      (data)=>{ //Next: Sirve para capturar la respuesta en caso de ser exitoso
        this.productos = data;
      },
      (error)=>{//Error: Sirve para capturar los mensajes de error
        alert("El servidor arrojo un mensaje: "+JSON.stringify(error));
      },
      ()=>{//Complete: Sirve para ejecutar algo haya sido exitoso o no

      }
    );
  }
}
