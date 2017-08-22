import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';

// Array con las rutas de este módulo. Ninguna funcional.
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const app_rountig = RouterModule.forRoot(routes);
