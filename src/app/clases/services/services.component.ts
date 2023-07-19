import { Component, OnInit } from '@angular/core';
import { EjemploService } from 'src/app/shared/services/ejemplo.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  //Ejemplo de como llamar un archivo service
  constructor(private nombreService: EjemploService) { }

  ngOnInit(): void {
    this.llamarService();
  }

  llamarService(){
    console.log(this.nombreService.sumar(1,1));
  }
}
