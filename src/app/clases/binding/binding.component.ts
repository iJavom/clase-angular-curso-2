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
}
