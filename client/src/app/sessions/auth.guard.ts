import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';

//import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate
// CanActivateChild 
{
  constructor(private readonly router: Router, 
    //private readonly auth: AuthService
    ) {
    // Nothing
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (false
        //this.auth.loggedIn()
        ) {
      this.router.navigate(['/dashboard']).catch((_error) => undefined);
      return false;
    }

    return true;
  }

  public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      console.log("===>",route,state);
    return this.canActivate(route, state);
  }
}