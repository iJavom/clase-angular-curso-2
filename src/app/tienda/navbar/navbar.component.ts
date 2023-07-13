import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu = [
    {nombre: 'Inicio'},
    {nombre: 'Tienda'},
    {nombre: 'Nosotros'},
    {nombre: 'Contactanos'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
