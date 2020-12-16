import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { GLOBAL } from "./global";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  })
};

@Injectable({
  providedIn: "root"
})
export class CampaniaService {
  url: string;
  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
    // this.url = "https://apisendme.anw.cloud/api";
  }

  agregarCampania(data: any): Observable<any> {
    let token = JSON.parse(localStorage.getItem("token"));
    httpOptions.headers = httpOptions.headers.set(
      "Authorization",
      "Bearer " + token
    );

    let json = JSON.stringify(data);
    return this._http.post(this.url + "/campania", json, httpOptions);
  }

  // METODO PARA LOGUEARSE
  listarCampanias(): Observable<any> {
    let token = JSON.parse(localStorage.getItem("token"));
    httpOptions.headers = httpOptions.headers.set(
      "Authorization",
      "Bearer " + token
    );

    return this._http.get(this.url + "/campania", httpOptions);
  }
}
