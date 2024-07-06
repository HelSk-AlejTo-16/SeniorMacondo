import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { SolicitarComponent } from './pages/solicitar/solicitar.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    TiendaComponent,
    AcercadeComponent,
    SolicitarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    LayoutPageComponent,
    TiendaComponent,
    AcercadeComponent,
    SolicitarComponent
  ]
})
export class HomeModule { }
