import { FilmService } from './../services/film.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import Film from '../Interfaces/Film';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  constructor(private route :ActivatedRoute,public service:FilmService,private cookieService: CookieService) { }
  comment="";
  comments=[
    {
message:""
    },
    {
message:""
    }
  ];
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.id=params.get('id');
    });
    
    this.service.getFilmById(this.id).then(res=>{
      console.log(res);
      this.film=res;
      this.setComments()
    
    })
    ;

  }
  film:any;
  id:string |any ="";

  ajouterAuxFavoris=()=>{
    this.service.ajouterFilmFavoris(this.film).then(res=>console.log(res));
  }
  isAuthenticated=()=>{
    return (!this.cookieService.get("id") && this.cookieService.get("id") === "" ) ? false :true;
  }

  addComment=()=>{
    this.service.addComment({message:this.comment,dateCreation:Date.now.toString(),createur:this.cookieService.get("id"),film:this.film}).then(res=>{
      this.setComments();
    })
  }

  setComments=()=>{
    this.service.getComments(this.film).then(res=>{
      
      this.comments=res;
      console.log(this.comments);
    })
  }

  

}
