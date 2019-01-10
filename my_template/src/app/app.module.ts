import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { LoginService } from './login-form/login.service';
import { TopComponent } from './top/top.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateEmployeeService } from './create-employee/create-employee.service';
import { UploadEmployeeComponent} from './upload-employee/upload-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ViewEmployeeService } from './view-employee/view-employee.service';
import { UploadServiceService} from './upload-employee/upload-service.service';
import { CreateBankdetailsComponent } from './create-bankdetails/create-bankdetails.component';
import { ViewBankdetailsComponent } from './view-bankdetails/view-bankdetails.component';
import { GenerateSalaryComponent } from './generate-salary/generate-salary.component';
import { ViewSalaryComponent } from './view-salary/view-salary.component';
import { CreateBankdetailsService} from './create-bankdetails/create-bankdetails.service';
import { ViewBankdetailsService} from './view-bankdetails/view-bankdetails.service';
import { BenifitComponent } from './benifit/benifit.component';
import { BenifitService} from './benifit/benifit.service';
import { ViewProofComponent } from './view-proof/view-proof.component';
import { ViewProofService} from './view-proof/view-proof.service';
import { GenerateSalaryService} from './generate-salary/generate-salary.service';
import { AttendenceComponent } from './attendence/attendence.component';
import { AttendenceService} from './attendence/attendence.service';
import { LeaveMasterComponent } from './leave-master/leave-master.component';
import { LeaveMasterService} from './leave-master/leave-master.service';



const appRoutes:Routes  =[
 /* {path:'',component: LoginFormComponent},
  {path:'dashboard',component: DashboardComponent},
  {path:'createemployee',component: CreateEmployeeComponent},
  {path:'uploadempproof',component: UploadEmployeeComponent},
  {path:'viewemployee',component: ViewEmployeeComponent},
  {path:'side',component: SidemenuComponent},
]*/


{ path: '', component: LoginFormComponent},
{ path: 'dashboard', component: DashboardComponent,
          children: [
            {path:'createemployee',component: CreateEmployeeComponent},
            {path:'uploadempproof',component: UploadEmployeeComponent},
            {path:'viewemployee',component: ViewEmployeeComponent},
            {path:'side',component: SidemenuComponent},
            {path:'createbankdetails',component: CreateBankdetailsComponent},
            {path:'viewbankdetails',component: ViewBankdetailsComponent},
            {path:'generatesalary',component: GenerateSalaryComponent},
            {path:'viewsalary',component: ViewSalaryComponent},
            {path:'benifits',component: BenifitComponent},
            {path:'viewempproof',component:  ViewProofComponent},
            {path:'attendence',component:  AttendenceComponent},
            {path:'leavemaster',component:  LeaveMasterComponent},
          ]
}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    SidemenuComponent,
    TopComponent,
    CreateEmployeeComponent,
    UploadEmployeeComponent,
    ViewEmployeeComponent,
    CreateBankdetailsComponent,
    ViewBankdetailsComponent,
    GenerateSalaryComponent,
    ViewSalaryComponent,
    BenifitComponent,
    ViewProofComponent,
    AttendenceComponent,
    LeaveMasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule

    

  ],
  providers: [LoginService,
              CreateEmployeeService,
              ViewEmployeeService,
              UploadServiceService,
              CreateBankdetailsService,
              ViewBankdetailsService,
              BenifitService,
              ViewProofService,
              GenerateSalaryService,
              AttendenceService,
              LeaveMasterService

            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
