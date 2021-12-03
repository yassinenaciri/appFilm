import { RouterModule } from '@angular/router';
import { FilmService } from './services/film.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmItemComponent } from './film-item/film-item.component';
import { ListFilmComponent } from './list-film/list-film.component';
import { FormsModule } from '@angular/forms';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FavorisComponent } from './favoris/favoris.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { CookieService } from 'ngx-cookie-service';
@NgModule({
  declarations: [
    AppComponent,
    FilmItemComponent,
    ListFilmComponent,
    FilmDetailComponent,
    FavorisComponent,
    HomeComponent,
    LoginComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [FilmService,CookieService] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
