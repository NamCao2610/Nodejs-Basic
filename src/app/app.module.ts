import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Router, CanActivate } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { AuthGuard } from './auth/auth.guard';
import {NgxPaginationModule} from 'ngx-pagination'

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './Components/signup/signup.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { MainComponent } from './Components/main/main.component';
import { ForgotpassComponent } from './Components/forgotpass/forgotpass.component';
import { EmailForgotComponent } from './Components/email-forgot/email-forgot.component';
import { ChangePassComponent } from './Components/change-pass/change-pass.component';
import { ChangeInfoComponent } from './Components/change-info/change-info.component';
import { QuiztestComponent } from './Components/quiztest/quiztest.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent,
    CategoriesComponent,
    MainComponent,
    ForgotpassComponent,
    EmailForgotComponent,
    ChangePassComponent,
    ChangeInfoComponent,
    QuiztestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    NgxPaginationModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', component:MainComponent},
      {path:'changePassword', component:ChangePassComponent},
      {path:'rename', component:ChangeInfoComponent},
      {path:'forgotemail', component:EmailForgotComponent},
      {path:'restorepassword', component:ForgotpassComponent},
      {path:'categories', component:CategoriesComponent},
      { path:'login', component:LoginComponent },
      { path:'signup',component:SignupComponent},
      {path:'quiztest/:Id',component:QuiztestComponent, canActivate: [AuthGuard]},
      {path: '**', redirectTo:'', pathMatch: 'full'}
    ])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
