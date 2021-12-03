import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private filmService:FilmService,private cookieService: CookieService) { }
  searchText:String ="";
  filmSelected :String ="Aucun";
  listeFilm: any =[]
  ngOnInit(): void {
    this.filmService.getAllFilms(1).then((data:any)=> this.listeFilm=data.results).catch((err)=> console.log(err));
  }
  search = ()=>{
    if(this.searchText!==" "){
      this.filmService.getFilmFromServer(this.searchText,1).then((data : any)=>{
        console.log(data);
        this.listeFilm= data.results}).catch((err) => console.log(err))
    }else{
      this.filmService.getAllFilms(1).then((data:any)=> this.listeFilm=data.results).catch((err)=> console.log(err));
    }
    
  }
  isAuthenticated=()=>{
    return (!this.cookieService.get("id") && this.cookieService.get("id") === "" ) ? false :true;
  }
  disconnect=()=>{
    this.cookieService.deleteAll() ;
  }
  

}
