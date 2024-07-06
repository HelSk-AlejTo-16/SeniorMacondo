import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { SolicitarComponent } from './pages/solicitar/solicitar.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';

const routes: Routes = [
  {
    path: '',
    component:LayoutPageComponent,
    children:[
     {path:'home', component:TiendaComponent}, 
     {path:'avisame', component:SolicitarComponent, title:'Solicitar informes'}, 
     {path:'acerca-de', component:AcercadeComponent, title:'Acerca de Sr. Macondo'}, 
     {path: '**',redirectTo:'home'},

    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
