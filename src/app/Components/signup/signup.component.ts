import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { DataServicesService } from '../../Services/data-services.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formSignUp: FormGroup;
  data: any;
  failSamePassword = false;
  constructor(private _services: DataServicesService, private router: Router) { }

  ngOnInit() {
  }

  onSignUp(form){ 
    this.failSamePassword = false;
    if(form.controls.password.value !== form.controls.password2.value){
        this.failSamePassword = true;
    }else{this._services.sendSignUp(form.value).subscribe(data => {
      this.data = data;
      alert("Đăng kí thành công , vui lòng check mail để kích hoạt");
      this.router.navigate(['/login']);
      });
    }
  }

}
