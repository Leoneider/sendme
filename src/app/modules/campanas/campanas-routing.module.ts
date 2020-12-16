import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampanasComponent } from './campanas/campanas.component';
import { AgregarcampanasComponent } from './agregarcampanas/agregarcampanas.component';


const routes: Routes = [
  {
    path: '',
    children: [{
        path: '',
        component: CampanasComponent
    },{
      path: 'agregar',
      component: AgregarcampanasComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampanasRoutingModule { }
