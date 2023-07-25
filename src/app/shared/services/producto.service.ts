import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  obtenerProductos(){
    return this.http.get<Producto[]>(`${this.apiUrl}products`);
  }

  obtenerProducto(idProducto: number){//NOTESE QUE ES SINGULAR
    return this.http.get<Producto>(`${this.apiUrl}products/${idProducto}`);
  } 

  crearProducto(paramProducto: Producto){
    return this.http.post(`${this.apiUrl}products`, paramProducto);
  }

  editarProducto(paramProducto: Producto){
    return this.http.put(`${this.apiUrl}products/${paramProducto.id}`, paramProducto);
  }


  eliminarProducto(idProducto: number){
    return this.http.delete(`${this.apiUrl}products/${idProducto}`);
  }
}
