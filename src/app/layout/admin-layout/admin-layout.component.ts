import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  token:any;
  usuario;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }


  logout(){
    // this._route.params.subscribe(params => {

      // convertir string a number +
      let logout = 1;

      // mando variable sure con 1 para saber que es salir
      if(logout == 1){

        // borrrar las variables de local storage
        localStorage.removeItem('token');

        // this.identity = null;
        this.token = null;

        //redireccion
        this._router.navigate(['login']);

      }

    }

}
