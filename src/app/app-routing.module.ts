import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { InicioComponent } from './tienda/inicio/inicio.component';
import { CatalogoComponent } from './tienda/catalogo/catalogo.component';
import { NosotrosComponent } from './tienda/nosotros/nosotros.component';
import { ContactanosComponent } from './tienda/contactanos/contactanos.component';
import { ProductoComponent } from './tienda/producto/producto.component';

const routes: Routes = [

  //1.- Rutas Especificas: Alguna ruta que pueda llevar parametros y son las primeras que se declaran
  //2.- Rutas generales: Tienden a ser componentes
  //3.- Ruta principal: Que son aquellas rutas que no tienen path
  //4.- Rutas anidadas: Que son aquellas rutas que importan modulos y declaran componentes hijos
  //5.- Ruta 404 / No se consiguio: Que es donde redirige todo en caso de no conseguir algun path
  {
    path: '', 
    redirectTo: 'tienda', 
    pathMatch: 'full'
  },
  { 
    path:'tienda',
    loadChildren : () => import('./tienda/tienda.module').then((m)=> m.TiendaModule)
  },
  { 
    path:'clase',
    loadChildren : () => import('./clases/clases.module').then((m)=> m.ClasesModule)
  },
  {path: '**', component: NoEncontradoComponent}
  //Volvemos a las 8:20;
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
