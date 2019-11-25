import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DataServicesService } from '../../Services/data-services.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-info',
  templateUrl: './change-info.component.html',
  styleUrls: ['./change-info.component.css']
})
export class ChangeInfoComponent implements OnInit {

  formchInfo: FormGroup;
  data:any;
  failPass = false;

  constructor(private router: Router, private services: DataServicesService) { }

  ngOnInit() {
  }

  onChangeInfo(form){
    this.failPass = false;
    this.services.sendChangeName(form.value).subscribe(data =>{
      this.data = data;
      localStorage.setItem('name',form.controls.name.value);
      alert('Thay đổi tên thành công !!!');
      this.router.navigate(['/categories'])
    },
    err =>{
      this.data = err;
      form.controls.password.reset();
      this.failPass = true;
    })
  }


}
