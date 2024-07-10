import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ProductosComponent } from './pages/productos/productos/productos.component';
import { HomeComponent } from './pages/home/home.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores/proveedores.component';
import { RecordatoriosComponent } from './pages/recordatorios/recordatorios/recordatorios.component';
import { RecordatorioComponent} from './pages/recordatorios/recordatorio/recordatorio.component'
import { AsistenciaComponent} from './pages/asistencia/asistencia.component'

const routes: Routes = [
  {
    path: '',
    component:LayoutPageComponent,
    children:[
     {path:'home', component:HomeComponent}, 
     {path:'productos', component:ProductosComponent, title:'Productos'}, 
     {path:'proveedores', component:ProveedoresComponent, title:'Proveedores'}, 
     {path:'recordatorios', component:RecordatoriosComponent, title:'Recordatorios'}, 
     {path:'recordatorio', component:RecordatorioComponent, title:'Recordatorio'}, 
     {path:'asistencia', component:AsistenciaComponent, title:'asistencia'},
     {path: '**',redirectTo:'home'},

    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
