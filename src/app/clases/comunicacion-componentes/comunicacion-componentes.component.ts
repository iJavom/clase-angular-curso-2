import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comunicacion-componentes',
  templateUrl: './comunicacion-componentes.component.html',
  styleUrls: ['./comunicacion-componentes.component.css']
})
export class ComunicacionComponentesComponent {
  @Input() invocoElInput = "Hola soy el valor por defecto"
  @Output() llamoAlPadre  = new EventEmitter();

  saludar(param:any){
    debugger;
    alert(`Hola ${param.value}` );
  }

  emitirEvento(){
    // alert("Hola voy a emitir un evento");
    this.llamoAlPadre.emit('Vine desde el hijo');
  }

}
