import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios/servicios.component';
import { EmpleadosComponent } from './pages/empleado/empleados/empleados.component';
import { SucursalesComponent } from './pages/sucursales/sucursales/sucursales.component';
import { NuevoEmpleadoComponent } from './pages/empleado/nuevo-empleado/nuevo-empleado.component';
import { EmpleadoComponent } from './pages/empleado/empleado/empleado.component';
import { NuevoServicioComponent } from './pages/servicios/nuevo-servicio/nuevo-servicio.component';
import { ServicioComponent } from './pages/servicios/servicio/servicio.component';
import { NuevaSucursalComponent } from './pages/sucursales/nueva-sucursal/nueva-sucursal.component';
import { SucursalComponent } from './pages/sucursales/sucursal/sucursal.component';

const routes: Routes = [
  {
    path: '',
    component:LayoutPageComponent,
    children:[
      {path:'home', component:HomeComponent, title:'Super Administrador'},

      {path:'empleados',component:EmpleadosComponent},
      {path:'nuevo-empleado',component:NuevoEmpleadoComponent},
      {path:'empleado',component:EmpleadoComponent},
      
 
      {path:'servicios', component:ServiciosComponent}, 
      {path:'nuevo-servicio',component:NuevoServicioComponent},
      {path:'servicio',component:ServicioComponent},
 
 
      {path:'sucursales',component:SucursalesComponent,title:'Sucursales'},
      {path:'nueva-sucursal',component:NuevaSucursalComponent},
      {path:'sucursal', component:SucursalComponent},
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
