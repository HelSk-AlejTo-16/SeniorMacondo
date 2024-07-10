import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomeComponent } from './pages/home/home.component';
import { JuegosComponent } from './pages/juegos/juegos/juegos.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { PlatillosComponent } from './pages/platillos/platillos/platillos.component';
import { VentaComponent } from './pages/ventas/venta/venta.component';
import { JuegoComponent } from './pages/juegos/juego/juego.component';
import { NuevoPlatilloComponent } from './pages/platillos/nuevo-platillo/nuevo-platillo.component';
import { CrearventaComponent } from './pages/crear-venta/crearventa.component';



const routes: Routes = [
  {
    path: '',
    component:LayoutPageComponent,
    children:[
     {path:'home', component: HomeComponent}, 
     {path:'juegos', component:JuegosComponent, title:'Juegos'}, 
     {path:'juego', component:JuegoComponent, title:'Juego'},
     {path:'mensajes', component:MensajesComponent, title:'Mensajes'}, 
     {path:'platillos', component:PlatillosComponent, title:'Platillos'}, 
     {path:'venta', component:VentaComponent, title:'Venta'}, 
     {path:'platillosnuevo', component:NuevoPlatilloComponent, title:'AgregarPlatilos'}, 
     {path: 'crear', component:CrearventaComponent},
     {path: '**',redirectTo:'home'}
   
  
     

    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoRoutingModule { }
