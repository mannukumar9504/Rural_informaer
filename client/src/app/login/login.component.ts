import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { Router } from '@angular/router';
import { loginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  name = 'Form Validation';
  demoForm: FormGroup;
  userId = new FormControl("", [Validators.required]);
  password = new FormControl("", [Validators.required]);
  constructor(private router: Router, private loginServ: loginService) {
    this.demoForm = new FormGroup({
      userId: this.userId,
      password: this.password
    });
  }

  login() {
    let registerUser: any = localStorage.getItem("registereduser");
    let userInfo = JSON.parse(registerUser);
    let loginUser = this.demoForm.value;
    if (userInfo?.email === loginUser?.userId && userInfo?.password === loginUser?.password) {
      this.loginServ.updateApprovalMessage({loggedIn: true, name: userInfo.name});
      this.router.navigate(['/dashboard']);
    } else {
      alert("Entered userId and password is Incorrect!");
    }
  }

}
