import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { GLOBAL } from './global';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  })
};

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  url:string;

  constructor(
    private _http: HttpClient
  ) { 
    this.url = GLOBAL.url;
  }


   // METODO PARA LOGUEARSE
   contacto():Observable<any>{
    let token = JSON.parse(localStorage.getItem("token"));
    httpOptions.headers = httpOptions.headers.set(
      "Authorization",
      "Bearer " + token
    );
  
    return this._http.get(this.url+'/contactos',httpOptions); 
 
  }

  guardarContacto(data: any): Observable<any> {
    let token = JSON.parse(localStorage.getItem("token"));
    httpOptions.headers = httpOptions.headers.set(
      "Authorization",
      "Bearer " + token
    );
  
    let json = JSON.stringify(data);
    console.log(httpOptions);
    console.log(json);
    return this._http.post(this.url + '/contactos', json, httpOptions); 

  }

 



}
