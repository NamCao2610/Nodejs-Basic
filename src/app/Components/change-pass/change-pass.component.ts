import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DataServicesService } from '../../Services/data-services.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  formchPass: FormGroup;
  data: any;
  failPass = false;
  failSamePass = false;
  constructor(private router: Router, private services: DataServicesService) { }

  ngOnInit() {
  }

  onChangePass(form){
    this.failPass = false;
    this.failSamePass = false;
    if(form.controls.newPassword.value !== form.controls.newPassword2.value){
      this.failSamePass = true;
    }else{this.services.sendChangePass(form.value).subscribe(data =>{
      this.data = data;
      this.router.navigate(['/categories'])
    },
      err=>{
        this.data = err;
        this.failPass = true;
      })
    }
  }



}
