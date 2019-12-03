import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: AdminLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
     {
      path: 'inicio',
      loadChildren: './modules/inicio/inicio.module#InicioModule'
     },
     {
      path: 'contactos',
      loadChildren: './modules/contactos/contactos.module#ContactosModule'
     },
     {
      path: 'campanas',
      loadChildren: './modules/campanas/campanas.module#CampanasModule'
     },
     {
      path: 'historicos',
      loadChildren: './modules/historico/historico.module#HistoricoModule'
     },
     {
      path: 'configuracion',
      loadChildren: './modules/configuracion/configuracion.module#ConfiguracionModule'
     }
    ]
  },
  {path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
