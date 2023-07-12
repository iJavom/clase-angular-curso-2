import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  unaVariable = 'Hola soy un ejemplo escrito en el ts';
  unaVariableProperty = true;
  unaImagen = 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Ara_macao_qtl1.jpg';
  mensajeBoton = 'No me clickees'

  unaVariableTwoWay = "Hola me cambio";

  constructor() { }

  ngOnInit(): void {
  }
  
  retornarMensaje(){
    // return {
    //   nombre: "sasha",
    //   edad: 7
    // }; //Retornar objetos dara algo que no esperamos
    return "Me retorne desde una funcion";
  }

  saludar(){
    alert("Hola, me han dado click para saludar");
  }

  cambiarMensaje(){
    this.unaVariable = 'Me he cambiado porque modificaron el input'
  }
}
