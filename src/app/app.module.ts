import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientsComponent } from './patients/patients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { TokenStorageService } from './services/token-storage.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './services/app.interceptor';
import { StatsService } from './services/stats.service';
import { PatientsService } from './services/patients.service';
import { MeetsService } from './services/meets.service';
import { PatientComponent } from './patient/patient.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { VisitsComponent } from './visits/visits.component';
import { DictionariesService } from './services/dictionaries.service';
import { VisitsService } from './services/visits.service';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    VisitsComponent,
    DashboardComponent,
    LoginComponent,
    PatientComponent,
    PatientFormComponent,
    VisitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [
    UserService,
    TokenStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true,
    },
    StatsService,
    PatientsService,
    MeetsService,
    DictionariesService,
    VisitsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
