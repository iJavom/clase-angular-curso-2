import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  formContactanos : FormGroup;

  constructor(private fb: FormBuilder) { 

    this.formContactanos = this.fb.group({
      nombre: ['Corresponde al valor inicial',Validators.required],
      email:['',[Validators.required, Validators.email]],
      telefono: ['3211234567',[Validators.required, Validators.minLength]],
      motivo: ['Holaaaaa']
    })
  }

  ngOnInit(): void {
  }

  enviar(){
    this.formContactanos.patchValue({motivo: 'Gracias por tus comentarios'});//Forma de asignar un valor en el formulario
    console.log(this.formContactanos);
    console.log(this.nombre());
    alert('Su mensaje se ha enviado exitosamente');
  }

  nombre(){
    // return this.formContactanos.value.nombre; //Metodo 1
    return this.formContactanos.get('nombre')?.value; //Metodo 2 (recomendando por el prof)
  }

  email(){
    return this.formContactanos.get('email')?.value;
  }

  telefono(){
    return this.formContactanos.get('telefono')?.value;
  }

  motivo(){
    return this.formContactanos.get('email')?.value;
  }

}
