import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CompetitionComponent} from './competition/competition.component';
import {DetailcompetitionComponent} from './detailcompetition/detailcompetition.component';
import {RegistervideoComponent} from './registervideo/registervideo.component';



// Array con las rutas de este módulo. Ninguna funcional.
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'concurso', component: CompetitionComponent },
  { path: 'concurso/:id', component: DetailcompetitionComponent },
  { path: 'concurso/:id/registro', component: RegistervideoComponent },

  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const app_rountig = RouterModule.forRoot(routes);
