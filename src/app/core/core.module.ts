import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenubarModule } from 'primeng/components/menubar/menubar';
import { DataTableModule, PaginatorModule } from 'primeng/primeng';

@NgModule({
  
  declarations: [HomeComponent, HeaderComponent, FooterComponent],

  imports: [
    CommonModule,
    CoreRoutingModule,
    MenubarModule,
    DataTableModule,
    PaginatorModule
  ],

  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
