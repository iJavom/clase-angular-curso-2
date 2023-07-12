import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-calculadora',
  templateUrl: './ejercicio-calculadora.component.html',
  styleUrls: ['./ejercicio-calculadora.component.css']
})
export class EjercicioCalculadoraComponent implements OnInit {

  valorCalculadora = "";
  valorCalculadoraDos = "";
  valorCalculadoraMostrado = "";
  operador = "";
  constructor() { }

  ngOnInit(): void {
  }

  escribirNumero(numero:string){
    //this.valorCalculadora = this.valorCalculadora + numero;
    
    if(this.operador==""){
      this.valorCalculadora += numero;
    }else{
      this.valorCalculadoraDos += numero;
    }
    this.valorCalculadoraMostrado += numero;
  }

  capturarOperador(operacion:string){
    // this.valorCalculadora = this.valorCalculadoraMostrado;
    this.operador = operacion;
    this.valorCalculadoraMostrado ="";
  }
  
  realizarOperacion(){
    debugger;
    // this.valorCalculadoraDos = this.valorCalculadoraMostrado;
    switch(this.operador){
      case '+':
        this.valorCalculadoraMostrado = (parseInt(this.valorCalculadora) + parseInt(this.valorCalculadoraDos)).toString();
      break;
      case '-':
        this.valorCalculadoraMostrado = (parseInt(this.valorCalculadora) - parseInt(this.valorCalculadoraDos)).toString();

      break;
      case 'X':
        this.valorCalculadoraMostrado = (parseInt(this.valorCalculadora) * parseInt(this.valorCalculadoraDos)).toString();
      break;
      case '/':
        this.valorCalculadoraMostrado = (parseInt(this.valorCalculadora) / parseInt(this.valorCalculadoraDos)).toString();
      break;
    }
    this.operador = "";
    this.valorCalculadora = "";
    this.valorCalculadoraDos = "";
  }

  reiniciar(){
    this.operador = "";
    this.valorCalculadora = "";
    this.valorCalculadoraDos = "";
    this.valorCalculadoraMostrado = "";
  }

}
