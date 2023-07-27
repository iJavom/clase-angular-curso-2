import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  obtenerCategorias(){
    return this.http.get<string[]>(`${this.apiUrl}products/categories`);
  }

}
