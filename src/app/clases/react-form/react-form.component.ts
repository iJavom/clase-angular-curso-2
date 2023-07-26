import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {

  variableElFormulario : FormGroup;

  constructor(private generadorForm: FormBuilder) {
    this.variableElFormulario = this.generadorForm.group({
      inputEjemplo: ['Hola soy un valor inicial',[Validators.required]]
    })

   }

  ngOnInit(): void {
  }

  asignar(){
    this.variableElFormulario.patchValue({inputEjemplo:'Hola he sido asignado'});
  }

  obtener(){
    console.log(this.variableElFormulario);
    const mensaje= this.inputEjemplo;
    alert(mensaje);
  }


  get inputEjemplo(){
    return this.variableElFormulario.get('inputEjemplo')?.value;
  }

}
