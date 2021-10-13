import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DutyRoutingModule } from './duty-routing.module';
import { DutyIndexComponent } from './components/duty-index/duty-index.component';
import { DutyTableComponent } from './components/duty-table/duty-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DutyIndexComponent, DutyTableComponent],
  imports: [
    CommonModule,
    DutyRoutingModule,
    FormsModule,
    ReactiveFormsModule
     
  ]
})
export class DutyModule { }
