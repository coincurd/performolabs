import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
 providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private AuthService : AuthService,
    private Router : Router)
  {

  }

 canActivate(
  route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.AuthService.LogAuthenticate())
    {
      return true;
    }
    else
    {
      alert('You are logged out');

      this.Router.navigate(['authentication']);
      return false;
    }
  }

}
