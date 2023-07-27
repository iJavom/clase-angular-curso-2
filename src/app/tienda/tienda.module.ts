import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendaRoutingModule } from './tienda-routing.module';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { TarjetaComponent } from './catalogo/tarjeta/tarjeta.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductoComponent } from './producto/producto.component';
import { TiendaComponent } from './tienda.component';
import { SharedModule } from '../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    TiendaComponent,
    NavbarComponent,
    InicioComponent,
    CatalogoComponent,
    TarjetaComponent,
    ProductoComponent,
    NosotrosComponent,
    ContactanosComponent,
  ],
  imports: [
    CommonModule,
    TiendaRoutingModule,
    SharedModule,
    NgSelectModule,
 
  ],
})
export class TiendaModule { }
