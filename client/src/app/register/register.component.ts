import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name = 'Form Validation';
  registerForm: FormGroup;
  nameUser = new FormControl("",[Validators.required])
  email = new FormControl("", [Validators.required]);
  password = new FormControl("", [Validators.required]);
  constructor() {
    this.registerForm = new FormGroup({
      name: this.nameUser,
      email: this.email,
      password: this.password
    });
  }
  registerUser () {
    localStorage.setItem("registereduser", JSON.stringify(this.registerForm.value));
  }
}
