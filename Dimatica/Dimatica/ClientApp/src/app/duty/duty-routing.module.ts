import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DutyIndexComponent } from './components/duty-index/duty-index.component';


const routes: Routes = [
  { path: 'duty', component: DutyIndexComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DutyRoutingModule { }
