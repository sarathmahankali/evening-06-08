import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'forget-password',component:ForgetPasswordComponent},
  {
    path:'doctor',
    loadChildren:()=>
    import('./doctor/doctor.module').then((m)=>m.DoctorModule),
  },
  {
    path:'receptionist',
    loadChildren:()=>
    import('./receptionist/receptionist.module').then((m)=>m.ReceptionistModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
