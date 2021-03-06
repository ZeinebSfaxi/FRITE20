import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {VerifyEmailComponent} from './verify-email/verify-email.component';
import {AuthGuard} from './services/services/guard/auth.guard';
import {ArtListComponent} from './art-list/art-list.component';
import {CreateArtComponent} from './create-art/create-art.component';
import {UpdateArtComponent} from './update-art/update-art.component';
import {ArtDetailsComponent} from './art-details/art-details.component';



const routes: Routes = [
  {path: '', redirectTo: 'arts', pathMatch: 'full'},
  {path: 'arts', component: ArtListComponent},
  {path: 'add', component: CreateArtComponent},
  {path: 'update/:id', component: UpdateArtComponent},
  {path: 'details/:id', component: ArtDetailsComponent},
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
