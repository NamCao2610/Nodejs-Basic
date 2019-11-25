import { Component, OnInit } from '@angular/core';

import { FormsModule, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { DataServicesService } from '../../Services/data-services.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userName = 'UserName';
  constructor(private router: Router, private services: DataServicesService) { }

  ngOnInit() {
  }

  LognOut(){
    this.userName = localStorage.getItem('name');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    this.userName = 'UserName';
    this.router.navigate(['/login'])
  }

 async checkLogin(){
    const isValid = await this.services.sendCheckToken();
    if(isValid){
      this.router.navigate(['/categories']);
    }else{
      this.router.navigate(['/login']);
    }
  }

  async checkSignUp(){
    const isValid = await this.services.sendCheckToken();
    if(isValid){
      this.router.navigate(['/']);
    }else{
      this.router.navigate(['/signup']);
    }
  }

  async checkUserName(){
    const isValid = await this.services.sendCheckToken();
    if(!isValid){
      this.router.navigate(['/login']);
    }
  }

  async checkchPass(){
    const isValid = await this.services.sendCheckToken();
    if(!isValid){
      this.router.navigate(['/login']);
    }else{
      this.router.navigate(['/changePassword']);
    }
  }

  async checkRename(){
    const isValid = await this.services.sendCheckToken();
    if(!isValid){
      this.router.navigate(['/login']);
    }else{
      this.router.navigate(['/rename']);
    }
  }

  



}
