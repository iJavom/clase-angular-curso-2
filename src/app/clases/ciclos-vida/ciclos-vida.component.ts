import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclos-vida',
  templateUrl: './ciclos-vida.component.html',
  styleUrls: ['./ciclos-vida.component.css']
})
export class CiclosVidaComponent implements OnInit {
  contador = 0;
  intervalo:any;
  constructor() { 
    // this.intervalo = setInterval(()=>{
    //   this.contador++;
    //   console.log(this.contador);
    // },1000);
    // console.clear();
    console.log("(1) Hola soy el constructor");
    //Se usa para definir las inyecciones
  }

  
  ngOnChanges(){
    console.log("(2) Hola soy el ngOnChanges");
    //Ya lo veremos ahora con el 2do bloque (Comunicacion de componentes)
  }

  ngOnInit(): void {
    console.log("(3) Hola soy el ngOnInit");
    //Se usa para definir la data de la ventana
  }

  ngDoCheck(){
    console.log("(4) Hola soy el ngDoCheck");
    //Se usa rara vez pero se podria definir metodos de de deteccion de cambio
  }

  ngAfterContentInit(){
    console.log("(5) Hola soy el ngAfterContentInit");
    //Sirve para validar si un componente hijo se inicio correctamente
  }

  ngAfterContentChecked(){
    console.log("(6) Hola soy el ngAfterContentChecked");
    //Verifica despues de cada ejecucion de docheck y se usa para seguir validando el componente hijo
  }

  ngAfterViewInit(){
    console.log("(7) Hola soy el ngAfterViewInit");
    //La etapa final de un renderizado
  }

  ngAfterViewChecked(){
    console.log("(8) Hola soy el ngAfterViewChecked");
    //Gracias a el podemos ver cada vez que un componente hijo retorne un valor
  }

  ngOnDestroy(){
    console.log("(9) Hola soy el ngOnDestroy");
    clearInterval(this.intervalo);
    //Sirve para dar de baja todos los observadores y eventos, para evitar fugas de memoria
    //En pocas palabras matar codigo asincrono;
    
  }



}
