import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/models/producto.model';
import { ProductoService } from 'src/app/shared/services/producto.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input() producto: Producto = new Producto();

  constructor(private productoService : ProductoService) { }

  ngOnInit(): void {
  }

  eliminar(id: number){
    this.productoService.eliminarProducto(id).subscribe({
      error: (error)=>{
        alert("Hubo un error");
      },
      next: (data)=>{
        alert("Eliminado exitoso");
      },

      complete: ()=>{

      }
    });
  }

}
