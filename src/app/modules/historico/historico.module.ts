import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricoRoutingModule } from './historico-routing.module';
import { HistoricoComponent } from './historico/historico.component';


@NgModule({
  declarations: [HistoricoComponent],
  imports: [
    CommonModule,
    HistoricoRoutingModule
  ]
})
export class HistoricoModule { }
