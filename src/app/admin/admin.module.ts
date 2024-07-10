import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos/productos.component';
import { NuevoProductoComponent } from './pages/productos/nuevo-producto/nuevo-producto.component';
import { ProductoComponent } from './pages/productos/producto/producto.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores/proveedores.component';
import { ProveedorComponent } from './pages/proveedores/proveedor/proveedor.component';
import { NuevoProveedorComponent } from './pages/proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { RecordatoriosComponent } from './pages/recordatorios/recordatorios/recordatorios.component';
import { RecordatorioComponent } from './pages/recordatorios/recordatorio/recordatorio.component';
import { NuevoRecordatorioComponent } from './pages/recordatorios/nuevo-recordatorio/nuevo-recordatorio.component';
import { AsistenciaComponent } from './pages/asistencia/asistencia.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
  
    LayoutPageComponent,
             HomeComponent,
             ProductosComponent,
             NuevoProductoComponent,
             ProductoComponent,
             ProveedoresComponent,
             ProveedorComponent,
             NuevoProveedorComponent,
             RecordatoriosComponent,
             RecordatorioComponent,
             NuevoRecordatorioComponent,
             AsistenciaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  exports: [
    LayoutPageComponent,
             HomeComponent,
             ProductosComponent,
             NuevoProductoComponent,
             ProductoComponent,
             ProveedoresComponent,
             ProveedorComponent,
             NuevoProveedorComponent,
             RecordatoriosComponent,
             RecordatorioComponent,
             NuevoRecordatorioComponent
  ]
})
export class AdminModule { }
