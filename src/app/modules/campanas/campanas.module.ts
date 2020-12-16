import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampanasRoutingModule } from './campanas-routing.module';
import { CampanasComponent } from './campanas/campanas.component';
import { AgregarcampanasComponent } from './agregarcampanas/agregarcampanas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListarcampaniasComponent } from './listarcampanias/listarcampanias.component';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [CampanasComponent, AgregarcampanasComponent, ListarcampaniasComponent],
  imports: [
    CommonModule,
    CampanasRoutingModule,
    ReactiveFormsModule,
    DataTablesModule
   
  ]
})
export class CampanasModule { }
