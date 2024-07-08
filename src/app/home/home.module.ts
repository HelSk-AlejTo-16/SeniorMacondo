import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { SolicitarComponent } from './pages/solicitar/solicitar.component';
import { MaterialModule } from '../material/material.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { MasProductoComponent } from './pages/mas-producto/mas-producto.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    TiendaComponent,
    AcercadeComponent,
    SolicitarComponent,
    ProductoComponent,
    MasProductoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  exports: [
    LayoutPageComponent,
    TiendaComponent,
    AcercadeComponent,
    SolicitarComponent
  ]
})
export class HomeModule { }
