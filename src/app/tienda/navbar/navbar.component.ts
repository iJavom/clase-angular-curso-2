import { Component, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() seleccionarPagina = new EventEmitter();

  menu = [
    {nombre: 'Inicio',ruta: '/tienda/inicio', active: true},
    {nombre: 'Tienda',ruta: '/tienda/catalogo'},
    {nombre: 'Nosotros',ruta: '/tienda/nosotros'},
    {nombre: 'Contactanos',ruta: '/tienda/contactanos'}
  ];



  constructor() { }

  ngOnInit(): void {
  }

  // cambiarPagina(paramRuta: string){
  //   // alert(`Deberia cambiar a la ${paramRuta}`);
  //   this.seleccionarPagina.emit(paramRuta);
  // }

}
