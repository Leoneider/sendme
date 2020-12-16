import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': 'MiToken'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CampopersonalizadoService {
  url:string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

   campos():Observable<any>{
    let token = JSON.parse(localStorage.getItem('token'));
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + token);
    return this._http.get(this.url+'/campos_personalizados',httpOptions); 

  }

  camposMensaje():Observable<any>{
    let token = JSON.parse(localStorage.getItem('token'));
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + token);
    return this._http.get(this.url+'/campos_personalizados_mensaje',httpOptions); 
  }

}
