import { FilmService } from './../services/film.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Film from '../Interfaces/Film';


@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  image:string ="";
  @Input() film: Film ={
    id:0,
    poster_path:"",
    original_title:"monFilm",
    overview:"",
    release_date :"",
    vote_average:0
  };
  
  
  constructor(private filmService:FilmService) {
    
   }


  ngOnInit(): void {
    
  }

  @Output() filmSelected=new EventEmitter<Film>();


  getImageFromServer =()=>{
    return this.filmService.getImageFromServer(this.film.poster_path)
     
  }

  

}
