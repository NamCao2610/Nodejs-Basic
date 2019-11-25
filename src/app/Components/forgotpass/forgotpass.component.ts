import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { DataServicesService } from '../../Services/data-services.service';
import { from } from 'rxjs';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  formForgot:FormGroup;
  data: any;
  failSamePass = false;
  failCode = false;

  constructor(private services: DataServicesService, private router: Router) { }

  ngOnInit() {
  }

  onForgotPass(form){
    this.failSamePass = false; 
    this.failCode = false;
    if(form.controls.newPassword.value !== form.controls.newPassword2.value){
      this.failSamePass = true;

    }else{ this.services.sendRestorePassword(form.value).subscribe(data =>{
      this.data = data;
      this.router.navigate(['/login']);
    },
      err => {
      this.failCode = true;
      form.controls.code.reset();
      })
    }
  }

}
