import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViewPendingReimbursementsComponent } from './pending-reimbursements/view-pending-reimbursements/view-pending-reimbursements.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewUpdateInformationComponent } from './employee/view-update-information/view-update-information.component';
import { ViewAllEmployeesComponent } from './employee/view-all-employees/view-all-employees.component';
import { ViewResolvedReimbursementsComponent } from './pending-reimbursements/view-resolved-reimbursements/view-resolved-reimbursements.component';
import { LoginComponent } from './users/login/login.component';
import { LogoutComponent } from './users/logout/logout.component';
import { ViewEmployeeReimbursementComponent } from './pending-reimbursements/view-employee-reimbursement/view-employee-reimbursement.component';
import { SubmitReimbursementComponent } from './pending-reimbursements/submit-reimbursement/submit-reimbursement.component';
import { RegisterComponent } from './users/register/register.component';
import { ViewMyReimbursementComponent } from './pending-reimbursements/view-my-reimbursement/view-my-reimbursement.component';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { ManagerhomeComponent } from './managerhome/managerhome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ViewPendingReimbursementsComponent,
    ViewUpdateInformationComponent,
    ViewResolvedReimbursementsComponent,
    ViewAllEmployeesComponent,
    ViewResolvedReimbursementsComponent,
    LogoutComponent,
    ViewEmployeeReimbursementComponent,
    SubmitReimbursementComponent,
    RegisterComponent,
    ViewMyReimbursementComponent,
    EmployeehomeComponent,
    ManagerhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatCardModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }