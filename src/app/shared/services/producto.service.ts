import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  //Nos vemos a las 8:15 - 20:15
  obtenerProductos(cantidad?:number, categoria?: string){
      let query="";
      if(cantidad){
        query=`?limit=${cantidad}`
      }
      let queryCategoria= "";
      if(categoria){
        queryCategoria=`/category/${categoria}`
      }

      return this.http.get<Producto[]>(`${this.apiUrl}products${queryCategoria}${query}`);
    
  }

  obtenerProducto(idProducto: number){//NOTESE QUE ES SINGULAR
    const encabezado = new HttpHeaders().set('Tokeeen', 'Alguntokenasjldhqiwhieodh'); 
    const options = {
      headers : encabezado
    }
    return this.http.get<Producto>(`${this.apiUrl}products/${idProducto}`,options);
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
