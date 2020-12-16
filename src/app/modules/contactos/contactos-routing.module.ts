import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { AgregarcontactoComponent } from './agregarcontacto/agregarcontacto.component';


const routes: Routes = [ {
  path: '',
  children: [{
      path: '',
      component: ContactosComponent
  },{
    path: 'agregar',
    component: AgregarcontactoComponent
}]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactosRoutingModule { }
