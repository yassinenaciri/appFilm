import { FilmService } from './../services/film.service';
import { Component, Input, OnInit } from '@angular/core';
import Film from '../Interfaces/Film';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit {
  @Input()
  listeFilm: any =[]
  searchText="";

  constructor(private filmService:FilmService) {
   }
  
  ngOnInit(): void {
  }

  search = ()=>{
    this.filmService.getFilmFromServer(this.searchText,1).then((data : any)=>{
      console.log(data);
      this.listeFilm= data.results}).catch((err) => console.log(err))
  }

}
