import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SucursalesComponent } from './pages/sucursales/sucursales/sucursales.component';
import { NuevaSucursalComponent } from './pages/sucursales/nueva-sucursal/nueva-sucursal.component';
import { SucursalComponent } from './pages/sucursales/sucursal/sucursal.component';
import { EmpleadosComponent } from './pages/empleado/empleados/empleados.component';
import { NuevoEmpleadoComponent } from './pages/empleado/nuevo-empleado/nuevo-empleado.component';
import { EmpleadoComponent } from './pages/empleado/empleado/empleado.component';
import { ServiciosComponent } from './pages/servicios/servicios/servicios.component';
import { NuevoServicioComponent } from './pages/servicios/nuevo-servicio/nuevo-servicio.component';
import { ServicioComponent } from './pages/servicios/servicio/servicio.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';


@NgModule({
  declarations: [
    SucursalesComponent,
    NuevaSucursalComponent,
    SucursalComponent,
    EmpleadosComponent,
    NuevoEmpleadoComponent,
    EmpleadoComponent,
    ServiciosComponent,
    NuevoServicioComponent,
    ServicioComponent,
    HomeComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule
  ],
  exports: [
    SucursalesComponent,
    NuevaSucursalComponent,
    SucursalComponent,
    EmpleadosComponent,
    NuevoEmpleadoComponent,
    EmpleadoComponent,
    ServiciosComponent,
    NuevoServicioComponent,
    ServicioComponent,
    HomeComponent,
    LayoutPageComponent
  ]
})
export class SuperAdminModule { }
