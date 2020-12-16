import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AdminLayoutComponent } from "./layout/admin-layout/admin-layout.component";
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      // {
      //   path: "inicio",
      //   loadChildren: "./modules/inicio/inicio.module#InicioModule"
      // },
      {
        path: "contactos",
        loadChildren: "./modules/contactos/contactos.module#ContactosModule"
      },
      {
        path: "campanas",
        loadChildren: "./modules/campanas/campanas.module#CampanasModule"
      },
      {
        path: "historicos",
        loadChildren: "./modules/historico/historico.module#HistoricoModule"
      },
      {
        path: "configuracion",
        loadChildren:
          "./modules/configuracion/configuracion.module#ConfiguracionModule"
      }
    ]
  },
  { path: "**", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
