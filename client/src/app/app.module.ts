import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './material.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { AboutComponent } from './about/about.component';
import { BussinessComponent } from './bussiness/bussiness.component';
import { EducationComponent } from './education/education.component';
import { EmploymentComponent } from './employment/employment.component';
import { GuidingComponent } from './guiding/guiding.component';
import { LoginComponent } from './login/login.component';
import { loginService } from './login/login.service';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './navigation/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    AboutComponent,
    BussinessComponent,
    EducationComponent,
    EmploymentComponent,
    GuidingComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [loginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
