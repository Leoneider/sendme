import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';




const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string;

  constructor(
    private _http: HttpClient
  ) { 
    this.url = 'https://apisendme.anw.cloud/api';
  }


   // METODO PARA LOGUEARSE
   signUp(user:any):Observable<any>{

    user.rememberme = true;

    let json = JSON.stringify(user);
    // httpOptions.headers = httpOptions.headers.set('Content-Type','application/x-www-form-urlencoded');

    // return this._http.get(this.url+'/contactosPrueba',httpOptions); 
    return this._http.post(this.url+'/auth/login',json,httpOptions); 
  }

  isLoggedIn(){
    let token = JSON.parse(localStorage.getItem('token'));
    let isAut:boolean

    if(token != null){
        isAut = true;
    }else{
        isAut = false;
    }
    return isAut;
  }


}
