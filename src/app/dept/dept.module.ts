import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeptRoutingModule } from './dept-routing.module';
import { DeptListComponent } from './dept-list/dept-list.component';
import { StepsModule } from 'primeng/primeng';
import { MenubarModule } from 'primeng/components/menubar/menubar';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import {GrowlModule} from 'primeng/components/growl/growl';
import { DataTableModule, PaginatorModule, DialogModule } from 'primeng/primeng';

@NgModule({
  declarations: [DeptListComponent],
  imports: [
    CommonModule,
    DeptRoutingModule,
    StepsModule,
    MenubarModule,
    InputTextModule,
    DropdownModule,
    MultiSelectModule,
    ButtonModule,
    GrowlModule,
    DataTableModule,
    PaginatorModule,
    DialogModule
  ]
})
export class DeptModule { }
