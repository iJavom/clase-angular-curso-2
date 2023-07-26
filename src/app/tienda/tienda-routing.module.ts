import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductoComponent } from './producto/producto.component';
import { TiendaComponent } from './tienda.component';

const routes: Routes = [
  {path: '', component: TiendaComponent, children:[
    { path: 'producto/:idProducto', component: ProductoComponent},
    { path: 'producto', component: ProductoComponent},
    {path:'inicio', component: InicioComponent},
    {path:'catalogo', component: CatalogoComponent},
    {path:'nosotros', component: NosotrosComponent},
    {path:'contactanos', component: ContactanosComponent},
    {path: '', redirectTo: 'inicio', pathMatch: 'full'}
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaRoutingModule { }
