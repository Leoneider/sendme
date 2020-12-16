import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";
import { UserService } from "../servicios/user.service";
import { Router } from "@angular/router";



@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user: User;
  // year : Date = new Date();
  loading: boolean;
  title: string;
  token:any;
  usuario;

  // variable para usuario logueado
  status: string;

  constructor(private userService: UserService, private _router: Router) {
    this.user = new User(1, "", "", "", "", "", "");
  }

  ngOnInit() {}

  onSubmit(form:any) {
    console.log(this.user);
    this.loading = true;
    this.status = null;

    this.userService.signUp(this.user).subscribe(
      response => {
        console.log(response);

        this.token = response.access_token;
        this.usuario = response.user;



        console.log(response);
        localStorage.setItem("token", JSON.stringify(this.token));
        localStorage.setItem("usuario", JSON.stringify(this.usuario));

        this.loading = false;

        this._router.navigateByUrl("contactos");
      },
      error => {
        this.loading = false;
        this.status = "error";
        console.log(<any>error);
      }
    );
  }
}
