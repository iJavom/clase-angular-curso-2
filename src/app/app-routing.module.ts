import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { ClasesComponent } from './clases/clases.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { InicioComponent } from './tienda/inicio/inicio.component';
import { CatalogoComponent } from './tienda/catalogo/catalogo.component';
import { NosotrosComponent } from './tienda/nosotros/nosotros.component';
import { ContactanosComponent } from './tienda/contactanos/contactanos.component';

const routes: Routes = [

  //1.- Rutas Especificas: Alguna ruta que pueda llevar parametros y son las primeras que se declaran
  //2.- Rutas generales: Tienden a ser componentes
  //3.- Ruta principal: Que son aquellas rutas que no tienen path
  //4.- Rutas anidadas: Que son aquellas rutas que importan modulos y declaran componentes hijos
  //5.- Ruta 404 / No se consiguio: Que es donde redirige todo en caso de no conseguir algun path
  {path: 'clase' , component: ClasesComponent},
  {path: '', redirectTo: 'tienda', pathMatch: 'full'},
  {path: 'tienda', component: TiendaComponent, children:[
    {path:'inicio', component: InicioComponent},
    {path:'catalogo', component: CatalogoComponent},
    {path:'nosotros', component: NosotrosComponent},
    {path:'contactanos', component: ContactanosComponent},
    {path: '', redirectTo: 'inicio', pathMatch: 'full'}
  ]
  },
  {path: '**', component: NoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
