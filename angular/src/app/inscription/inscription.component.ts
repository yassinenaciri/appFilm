import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import User from '../Interfaces/User';
import { FilmService } from '../services/film.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  
    constructor(private service:FilmService,private cookieService: CookieService,private router: Router) { }
    error =false;
    user :User={
      "email":"",
      "password":"",
    }
    ngOnInit(): void {
    }
  
    register=()=>{
      this.service.registerUser(this.user).then((res)=>{
        if(res !=false){
          this.cookieService.set("id",res);
          console.log(this.cookieService.get("id"));
          this.router.navigate([''])
        }else{
          this.error=true;
        }
      
      });
    }
  
  }