import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { DoctorComponent } from './doctor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DocSidebarComponent } from './doc-sidebar/doc-sidebar.component';
import { DocProfileComponent } from './doc-profile/doc-profile.component';
import { DocDashboardComponent } from './doc-dashboard/doc-dashboard.component';
import { DocAppointmentDetailsComponent } from './doc-appointment-details/doc-appointment-details.component';
import { DocPetsComponent } from './doc-pets/doc-pets.component';
import { DocHeaderComponent } from './doc-header/doc-header.component';


@NgModule({
  declarations: [
    DocSidebarComponent,
    DocProfileComponent,
    DocDashboardComponent,
    DocAppointmentDetailsComponent,
    DocPetsComponent,
    DoctorComponent,
    DocHeaderComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    
  ]
})
export class DoctorModule {
  
 }
