import { RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Film from '../Interfaces/Film';
import User from '../Interfaces/User';
import { CookieService } from 'ngx-cookie-service';

const backurl='/api/';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  
  

  Api_Token ='653c2ee8cd95fbd2626732aa98a8333e'

  constructor(private http: HttpClient, private router:RouterModule,private cookieService: CookieService) { }


  getAllFilms(page :Number){
    const url ='https://api.themoviedb.org/3/movie/popular?api_key='+this.Api_Token;
    return this.http.get(url).toPromise().then((response:any)=>response).catch((err)=>console.log(err))
  }
  
  getFilmFromServer=(text :String ,page :Number) =>{
    const url='https://api.themoviedb.org/3/search/movie?api_key='+this.Api_Token+'&language=fr&query=' + text + "&page=" + page
    return this.http.get(url).toPromise().then((response :any)=>response).catch(err=>console.log(err))
  }

  getImageFromServer =(image :String)=>{
    return 'https://image.tmdb.org/t/p/original/'+image;
  }
  
  getFilmById = (id :  string |null)=>{
    const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this.Api_Token + '&language=fr';
    return this.http.get(url).toPromise().then((films:any)=>films).catch(err=>console.log(err))
  }

  ajouterFilmFavoris=(film :Film)=>{
    const url = backurl+'films' 
    return this.http.post(url,{film:film , userId:this.cookieService.get("id")}).toPromise().then((res:any)=>res).catch(err=>console.log(err))
  }

  getFilmsFavoris=()=>{
    const url = backurl+'/'+this.cookieService.get("id"); 
    return this.http.get(url).toPromise()
  }

  registerUser(user :User) {
    const url = backurl+'users';
    return this.http.post(url,user).toPromise().then((res:any)=>res).catch(err=>console.log(err))
  }

  authenticate(user :User) {
    const url =  backurl+'users/authenticate' 
    return this.http.post(url,user).toPromise().then((res:any)=>res).catch(err=>console.log(err))
  }

  addComment=(comment:any )=>{
    const url =  backurl+'comments/add' ;
    return this.http.post(url,comment).toPromise().then((res:any)=>res).catch(err=>console.log(err))
  }
  getComments=(film:any )=>{
    const url =  backurl+'comments' ;
    return this.http.post(url,film).toPromise().then((res:any)=>res).catch(err=>console.log(err));
  }
}
