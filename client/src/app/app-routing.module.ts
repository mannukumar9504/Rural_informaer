import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { AuthGuard } from './sessions/auth.guard';
import { AboutComponent } from './about/about.component';
import { BussinessComponent } from './bussiness/bussiness.component';
import { EducationComponent } from './education/education.component';
import { EmploymentComponent } from './employment/employment.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GuidingComponent } from './guiding/guiding.component';

const routes: Routes = [
  {

    path: 'new-component',
    canActivate: [AuthGuard],
    component: Component1Component
  },
  { path: 'customers', 
  canActivate: [AuthGuard],
  canActivateChild: [AuthGuard],
  loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) 
 }
 ,{
   path: 'dashboard', 
   component: Component1Component
 },
 {
  path: 'about',
  component: AboutComponent
 },
 {
  path: 'bussiness',
  component: BussinessComponent 
 },
 {
  path: 'education',
  component: EducationComponent
 },
 {
  path: 'employment',
  component: EmploymentComponent
 },
 {
  path: 'login',
  component: LoginComponent
 },
 {
  path: 'register',
  component: RegisterComponent
 },
 {
  path: 'guide',
  component: GuidingComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
