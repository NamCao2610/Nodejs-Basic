import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { DataServicesService } from '../../Services/data-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formSignIn: FormGroup;
  data:any;
  user: any;
  token: any;
  loginFaild = false;
  constructor(private _services: DataServicesService, private router: Router) { }

  ngOnInit() {
  }

  onSignIn(fromLogin){
    this._services.sendLogin(fromLogin.value).subscribe(data => {
      this.data = data;
      this.user = this.data.user;
      this.token = this.data.token;
      localStorage.setItem('token', this.token);
      localStorage.setItem('name', this.user.name);
      localStorage.setItem('email', this.user.email)
      this.router.navigate(['/categories'])
      
    },
    err =>{
       fromLogin.controls.password.reset();
       //console.log(err)
       this.loginFaild = true;
      }
    ) 
  }

}
