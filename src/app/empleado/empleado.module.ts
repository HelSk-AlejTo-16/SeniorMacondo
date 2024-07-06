import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoRoutingModule } from './empleado-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { JuegosComponent } from './pages/juegos/juegos/juegos.component';
import { JuegoComponent } from './pages/juegos/juego/juego.component';
import { PlatillosComponent } from './pages/platillos/platillos/platillos.component';
import { NuevoPlatilloComponent } from './pages/platillos/nuevo-platillo/nuevo-platillo.component';
import { PlatilloComponent } from './pages/platillos/platillo/platillo.component';
import { VentaComponent } from './pages/ventas/venta/venta.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { CrearventaComponent } from './pages/ventas/crear-venta/crearventa.component';

@NgModule({
  declarations: [
  
    HomeComponent,
       LayoutPageComponent,
       JuegosComponent,
       JuegoComponent,
       PlatillosComponent,
       NuevoPlatilloComponent,
       PlatilloComponent,
       VentaComponent,
       MensajesComponent,
       CrearventaComponent
      
  ],
  imports: [
    CommonModule,
    EmpleadoRoutingModule
  ],
  exports: [
    HomeComponent,
       LayoutPageComponent,
       JuegosComponent,
       JuegoComponent,
       PlatillosComponent,
       NuevoPlatilloComponent,
       PlatilloComponent,
       VentaComponent,
       MensajesComponent,
       CrearventaComponent
  ]
})
export class EmpleadoModule { }
