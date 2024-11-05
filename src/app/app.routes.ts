import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { ForgetPasswordComponent } from './modules/forget-password/forget-password.component';

export const routes: Routes = [

  {
    path: "login",
    component: LoginComponent
  },{
    path: "register",
    component: RegisterComponent
  },{
    path: "forget",
    component: ForgetPasswordComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

];
