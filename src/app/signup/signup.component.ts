import { Component, OnInit } from '@angular/core';
import {DataService} from './../services/data.service';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';

import { stringify } from 'querystring';
import { Students } from '../typeclass/Students';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  fromSignUp:FormGroup;
  checkLogin=false;
  indexFound=-1;
  stu:Students;
  constructor(private services:DataService, private fb:FormBuilder) { }

  ngOnInit() {
    this.fromSignUp=this.fb.group({
      username:'',
      password:['',[,Validators.minLength(6), Validators.maxLength(20)]],
      fullname:'',
      email:'',
      gender:'true',
      birthday: Date,
      schoolfee:'',
      marks:'0'
    });
    this.checkLogin=this.services.checklogin;
  }
  onSignUp(){
    this.indexFound=this.services.getStud().findIndex(value=>{
      return value.username==this.fromSignUp.controls.username.value || value.email==this.fromSignUp.controls.email.value;
    
  });
  console.log('cccccc', this.indexFound);
  if(this.indexFound ==-1){
    this.stu=this.fromSignUp.value;
    console.log('dayyy la form', this.fromSignUp.value);
    this.services.addStudent(this.stu )
  }
}

}
