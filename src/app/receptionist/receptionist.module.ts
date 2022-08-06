import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionistRoutingModule } from './receptionist-routing.module';
import { RecepDashboardComponent } from './recep-dashboard/recep-dashboard.component';
import { RecepSidebarComponent } from './recep-sidebar/recep-sidebar.component';
import { RecepProfileComponent } from './recep-profile/recep-profile.component';
import { RecepHeaderComponent } from './recep-header/recep-header.component';
import { RecepPetsComponent } from './recep-pets/recep-pets.component';
import { RecepVetsComponent } from './recep-vets/recep-vets.component';
import { ReceptionistComponent } from './receptionist.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    RecepDashboardComponent,
    RecepSidebarComponent,
    RecepProfileComponent,
    RecepHeaderComponent,
    RecepPetsComponent,
    RecepVetsComponent,
    ReceptionistComponent
  ],
  imports: [
    CommonModule,
    ReceptionistRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
 
   
  ]
})
export class ReceptionistModule { }
