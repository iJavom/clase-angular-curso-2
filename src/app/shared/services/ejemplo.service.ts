import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EjemploService {

  constructor() { }

  sumar(a:number,b:number):number{
    return (a+b);
  }
}
