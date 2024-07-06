import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminModule } from '../admin/admin.module';
import { SuperAdminModule } from '../super-admin/super-admin.module';
import { EmpleadoModule } from '../empleado/empleado.module';

const routes: Routes = [
  {
    path: '',
    component:LayoutPageComponent,
    children:[
     {path:'login', component:LoginPageComponent, title:'Acceder'} 
     //Muestra el apartado para acceder con la cuenta de cada empleado
     //No cuenta con acceso a registrarse para tener una cuenta
     //El acceso lo asigna el propio super administrador al momento de registrar un empleado

    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccesoRoutingModule { }
