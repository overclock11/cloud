import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { CompetitionComponent} from './competition/competition.component';
import { DetailcompetitionComponent} from './detailcompetition/detailcompetition.component';
import { RegistervideoComponent} from './registervideo/registervideo.component';
import { RegisterUserComponent} from './register-user/register-user.component';
import { CrudCompetitionComponent} from './crud-competition/crud-competition.component';
import { HomeAdminComponent} from './home-admin/home-admin.component';
import { ConcursoGestionComponent} from './concurso-gestion/concurso-gestion.component';
import { CreateCompetitionComponent} from './create-competition/create-competition.component';
import { CrudVideoComponent} from './crud-video/crud-video.component';
import { CrudDetailVideoComponent} from './crud-detail-video/crud-detail-video.component';




// Array con las rutas de este módulo. Ninguna funcional.
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'concurso/:id', component: DetailcompetitionComponent },
  { path: 'concursos', component: CompetitionComponent },
  { path: 'concurso/:id/registro', component: RegistervideoComponent },
  { path: 'sing-up', component: RegisterUserComponent },
  { path: 'crud-competition', component: CrudCompetitionComponent },
  { path: 'home-admin', component: HomeAdminComponent },
  { path: 'concurso-gestion/:id', component: ConcursoGestionComponent },
  { path: 'create-competition', component: CreateCompetitionComponent },
  { path: 'crud-video/:id', component: CrudVideoComponent },
  { path: 'crud-detail-video/:id', component: CrudDetailVideoComponent },

  

  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const app_rountig = RouterModule.forRoot(routes);
