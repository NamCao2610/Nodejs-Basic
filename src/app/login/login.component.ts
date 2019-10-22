import { Component, OnInit } from '@angular/core';
import {Students} from './../typeclass/Students';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import {DataService } from './../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 fromSignIn:FormGroup;
  constructor(private fb:FormBuilder, private services:DataService) { }
data:any;
Students:Students[]=[];
objstu:any;
length:any;
indexFound=-1;
checkLogin=false;
thongbao=false;
  ngOnInit() {
    this.fromSignIn=this.fb.group({
      username:'',
      password:''
    });
    console.log('checklogin', this.services.checklogin)
    if(this.services.checklogin==true){
      this.checkLogin=true;
    }
  }
  onSubmitSign(){
    this.indexFound=this.services.getStud().findIndex(value=>{
        return value.username===this.fromSignIn.controls.username.value && value.password===this.fromSignIn.controls.password.value;
        
    });
    if(this.indexFound !=-1){
      this.services.setcheckLogin(true);
      this.services.setIndexStu(this.indexFound); 
      this.checkLogin=true;    
    }
    else{
      this.thongbao=true;
    }
  }

}
