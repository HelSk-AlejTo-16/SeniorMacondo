import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ingresar',
    loadChildren:() => import('./acceso/acceso.module').then(m => m.AccesoModule),
  },
  {
    path: 'WebSrMacondo',
    loadChildren:() => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path:'admin',
    loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule), 
  },
  {
    path:'super-admin', 
    loadChildren:() => import('./super-admin/super-admin.module').then(m => m.SuperAdminModule), 
  },
  {path:'empleado', 
    loadChildren:() => import('./empleado/empleado.module').then(m => m.EmpleadoModule), 
  },
  {
    path: '',
    redirectTo:'WebSrMacondo',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo:'WebSrMacondo',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
