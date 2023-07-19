import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Menu } from 'src/app/shared/models/menu.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() seleccionarPagina = new EventEmitter();

  menu: Menu[] = [
    {nombre: 'Inicio',ruta: '/tienda/inicio', desactivado: false},
    {nombre: 'Tienda',ruta: '/tienda/catalogo', desactivado: false},
    {nombre: 'Nosotros',ruta: '/tienda/nosotros', desactivado: false},
    {nombre: 'Contactanos',ruta: '/tienda/contactanos', desactivado: false}
  ];



  constructor() { }

  ngOnInit(): void {
  }


  // cambiarPagina(paramRuta: string){
  //   // alert(`Deberia cambiar a la ${paramRuta}`);
  //   this.seleccionarPagina.emit(paramRuta);
  // }

}
