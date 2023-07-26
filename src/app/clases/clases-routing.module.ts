import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasesComponent } from './clases.component';
import { RoutejemDosComponent } from './routing/routejem-dos/routejem-dos.component';
import { RoutejemUnoComponent } from './routing/routejem-uno/routejem-uno.component';

const routes: Routes = [

  {path: '' , component: ClasesComponent, children:[
    {path: 'ruteo-1/:paramProfe', component: RoutejemUnoComponent},
    {path: 'ruteo-1', component: RoutejemUnoComponent},
    {path: 'ruteo-2', component: RoutejemDosComponent},
    {path: '', component: RoutejemUnoComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasesRoutingModule { }
