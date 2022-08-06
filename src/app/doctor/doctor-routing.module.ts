import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocDashboardComponent } from './doc-dashboard/doc-dashboard.component';
import { DocPetsComponent } from './doc-pets/doc-pets.component';
import { DocProfileComponent } from './doc-profile/doc-profile.component';
import { DoctorComponent } from './doctor.component';

const routes: Routes = [
  {
    path:'',
    component:DoctorComponent,
    children:[
      { path: '', redirectTo: '/doctor/dashboard', pathMatch: 'full' },
      {path: 'dashboard', component: DocDashboardComponent },
      {path: 'pets', component: DocPetsComponent },
      {path:'profile',component:DocProfileComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
