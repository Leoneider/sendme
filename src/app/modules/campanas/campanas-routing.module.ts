import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampanasComponent } from './campanas/campanas.component';


const routes: Routes = [
  {
    path: '',
    children: [{
        path: '',
        component: CampanasComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampanasRoutingModule { }
