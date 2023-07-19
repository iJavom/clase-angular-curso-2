import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routejem-uno',
  templateUrl: './routejem-uno.component.html',
  styleUrls: ['./routejem-uno.component.css']
})
export class RoutejemUnoComponent implements OnInit {
  variableInterpolacion: string = "";

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params)=>{
      // alert(params.get('paramProfe'));
      const paramProfe = params.get('paramProfe');
      if(paramProfe){
        this.variableInterpolacion = paramProfe;
      }
    });
  }

}
