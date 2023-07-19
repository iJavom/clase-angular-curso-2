import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routejem-dos',
  templateUrl: './routejem-dos.component.html',
  styleUrls: ['./routejem-dos.component.css']
})
export class RoutejemDosComponent implements OnInit {

  constructor(private routerImpor : Router) { }

  ngOnInit(): void {
  }

  cambiarPagina(){
    this.routerImpor.navigateByUrl('/clase/ruteo-1');
  }
}
