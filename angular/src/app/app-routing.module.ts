import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FavorisComponent } from './favoris/favoris.component';
import { ListFilmComponent } from './list-film/list-film.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailComponent } from './film-detail/film-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'movie/:id', component: FilmDetailComponent },
  { path: 'favoris', component: FavorisComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: InscriptionComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
