import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoricoComponent } from './historico/historico.component';


const routes: Routes = [
  {
    path: '',
    children: [{
        path: '',
        component: HistoricoComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoricoRoutingModule { }
