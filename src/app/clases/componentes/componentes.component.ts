import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.css']
})
export class ComponentesComponent implements OnInit {
  //Donde declaramos variables
  public unaVariable:string = "Hola soy un valor inicializado";

  //La ejecucion inicial del componente
  constructor() {
    //Para asignar valores iniciales en nuestras variables
    //Para inicializar importaciones realizadas
  }
  
  ngOnInit(): void {
    //Sirve para asignar valores iniciales a nuestros elementos
    //Realizar peticiones http iniciales
  }

  //La zona de metodos (funciones) 
  //es donde ponemos la logica del componente ya funcional
  saludar(){
    alert("Hola mundo!");
  }

}
