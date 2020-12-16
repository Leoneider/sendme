import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../servicios/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private _userService: UserService, private router: Router) {}



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin();
  }


  checkLogin() {
    console.log(this._userService.isLoggedIn())
    if (this._userService.isLoggedIn()) { return true; }

    // // Store the attempted URL for redirecting
    // // this.authService.redirectUrl = url;
    // // Navigate to the login page with extras
    this.router.navigateByUrl('login');
    return false;
  }
  
}
