import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactosRoutingModule } from './contactos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactosComponent } from './contactos/contactos.component';
import { DataTablesModule } from 'angular-datatables';
import { AgregarcontactoComponent } from './agregarcontacto/agregarcontacto.component';


@NgModule({
  declarations: [ContactosComponent, AgregarcontactoComponent],
  imports: [
    CommonModule,
    ContactosRoutingModule,
    DataTablesModule,
    ReactiveFormsModule
  ]
})
export class ContactosModule { }
