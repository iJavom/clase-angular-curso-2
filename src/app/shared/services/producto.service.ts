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

  //obtenerProducto //NOTESE QUE ES SINGULAR

  crearProducto(paramProducto: Producto){
    return this.http.post(`${this.apiUrl}products`, paramProducto);
  }
}
