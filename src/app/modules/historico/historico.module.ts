import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricoRoutingModule } from './historico-routing.module';
import { HistoricoComponent } from './historico/historico.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [HistoricoComponent],
  imports: [
    CommonModule,
    HistoricoRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
  ]
})
export class HistoricoModule { }
