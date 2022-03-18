import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from './guard/authentication.guard';
import { LoginComponent } from './login/login.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientComponent } from './patient/patient.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { VisitsComponent } from './visits/visits.component';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthenticationGuard],
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'patients',
    canActivate: [AuthenticationGuard],
    children: [

      {
        path: '',
        component: PatientsComponent,
      },
      {
        path: 'nouveau',
        component: PatientFormComponent,
      },
      {
        path: ':id',
        component: PatientComponent,
      },
      {
        path: ':id/edit',
        component: PatientFormComponent,
        data: {
          edit: true
        }
      }
    ]
  },
  {
    path: 'visites',
    canActivate: [AuthenticationGuard],
    component: VisitsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
