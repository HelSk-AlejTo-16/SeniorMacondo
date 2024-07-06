import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ProductosComponent } from './pages/productos/productos/productos.component';
import { HomeComponent } from './pages/home/home.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores/proveedores.component';
import { RecordatoriosComponent } from './pages/recordatorios/recordatorios/recordatorios.component';

const routes: Routes = [
  {
    path: '',
    component:LayoutPageComponent,
    children:[
     {path:'home', component:HomeComponent}, 
     {path:'productos', component:ProductosComponent, title:'Productos'}, 
     {path:'proveedores', component:ProveedoresComponent, title:'Proveedores'}, 
     {path:'recordatorios', component:RecordatoriosComponent, title:'Recordatorios'}, 
     {path: '**',redirectTo:'home'},

    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
