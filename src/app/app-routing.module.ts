import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: './core/core.module#CoreModule' }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
