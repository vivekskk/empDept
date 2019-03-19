import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeptListComponent } from './dept-list/dept-list.component';

const routes: Routes = [
  { path: '', component: DeptListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeptRoutingModule { }
