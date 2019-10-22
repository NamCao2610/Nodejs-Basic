import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExamComponent } from './exam/exam.component';
import { TestquizComponent } from './testquiz/testquiz.component';
import {RouterModule,Router} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MangerUserComponent } from './manger-user/manger-user.component';
import { SignupComponent } from './signup/signup.component';
import { LognoutComponent } from './lognout/lognout.component'

@NgModule({
  declarations: [
    AppComponent,
    ExamComponent,
    TestquizComponent,
    LoginComponent,
    MangerUserComponent,
    SignupComponent,
    LognoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path:'',component:ExamComponent},
      {path:'Exam',component:ExamComponent},
      {path:'TestAns/:Name/:Id',component:TestquizComponent},
      {path:'Signin',component:LoginComponent},
      {path:'Username',component:MangerUserComponent},
      {path:'Logout',component:LognoutComponent},
      {path:'SignUp',component:SignupComponent},
      {path:'**',redirectTo:'Exam',pathMatch:'full'}

    ])

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
