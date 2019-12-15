import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactosRoutingModule } from './contactos-routing.module';
import { ContactosComponent } from './contactos/contactos.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [ContactosComponent],
  imports: [
    CommonModule,
    ContactosRoutingModule,
    DataTablesModule
  ]
})
export class ContactosModule { }
