import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  mostrarImagen = false;
  unArray = ["a","b","c","d"]
  status ="Listo"

  aplicarBootstrap = true;


  altura=50
  color="red"
  constructor() { }

  ngOnInit(): void {
  }

}
