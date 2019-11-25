import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { DataServicesService } from '../../Services/data-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-forgot',
  templateUrl: './email-forgot.component.html',
  styleUrls: ['./email-forgot.component.css']
})
export class EmailForgotComponent implements OnInit {

  formsendEmail: FormGroup;
  data: any;
  constructor(private services: DataServicesService, private router: Router) { }

  ngOnInit() {
  }

  onsendEmail(form){
    this.services.sendForgotPassword(form.value).subscribe(data =>{
      this.data = data;
      this.router.navigate(['/restorepassword'])
    })
  }

}
