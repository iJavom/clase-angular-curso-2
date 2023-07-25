import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/shared/models/producto.model';
import { ProductoService } from 'src/app/shared/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  producto : Producto = new Producto();

  constructor(private productoService : ProductoService, 
              private activatedRoute: ActivatedRoute,
              private router : Router
              ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      const paramId = param.get('idProducto');
      if(paramId != null){
        this.productoService.obtenerProducto(+paramId).subscribe(
          (data)=>{
            this.producto = data;
          },
          (error)=>{
            alert("Ocurrio un error en el servidor: "+error.message);
          }
        );
      }
    });
  }

  guardar(){
    if(this.producto.id == 0){
      this.productoService.crearProducto(this.producto).subscribe(
        (data)=>{
          alert('Producto guardado exitosamente');
  
        },
        (error)=>{
          alert('Error guardando');
        }
      );
    }else{
      this.productoService.editarProducto(this.producto).subscribe(
        (data)=>{
          alert('Producto guardado exitosamente');
          this.router.navigateByUrl('/tienda/catalogo');
        },
        (error)=>{
          alert('Error guardando');
        }
      );
    }

  }



}
