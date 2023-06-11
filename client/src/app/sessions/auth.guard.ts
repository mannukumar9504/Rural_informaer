import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { Observable } from 'rxjs';

//import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate
// CanActivateChild 
{
  constructor(private readonly router: Router, 
    private auth: AuthService
    //private readonly auth: AuthService
    ) {
    // Nothing
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.isLogin()) {
      return true;
    } else {
    this.router.navigate(['/login']);
    return false;
    }
  }

  public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }
}