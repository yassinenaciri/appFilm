import { FilmService } from './../services/film.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {

  constructor(private service:FilmService,private cookieService: CookieService) { }
  result :any;
  listeFavoris :any;
  ngOnInit(): void {
    this.service.getFilmsFavoris().then(res=>{
      this.listeFavoris=Object.values(res);
    })
  }

  isAuthenticated=()=>{
    return (!this.cookieService.get("id") && this.cookieService.get("id") === "" ) ? false :true;
  }
  disconnect=()=>{
    this.cookieService.deleteAll() ;
  }

}
