import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLogin() {
    let value =localStorage.getItem('registereduser');
    let registereduser = JSON.parse(value || "{}");

    let activateRoute = false;
    if(registereduser?.email && registereduser?.password) {
      activateRoute = true;
    }
    return activateRoute;
  }
}
