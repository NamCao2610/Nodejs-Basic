import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import {DataService} from './../services/data.service';
import {Students} from './../typeclass/Students';
@Component({
  selector: 'app-manger-user',
  templateUrl: './manger-user.component.html',
  styleUrls: ['./manger-user.component.css']
})
export class MangerUserComponent implements OnInit {
  fromUpdateStu:FormGroup;
  formPass:FormGroup;
  indexStu:any;
  student:Students; 
  fullname:any;
  checkLogin=false;
  user='';
  checkfrom=false;
  checkPass=false;
  checkPasss=false;
  constructor(private fb:FormBuilder, private services:DataService) { }

  ngOnInit() {
    if(this.services.checklogin==true){
      this.checkLogin=true;
      this.checkfrom=true;
    }
    this.student=this.services.objStu;
    console.log('studenysss',this.student);
    console.log('index stuuuuu neee', this.services.indexStu);
      if(this.services.indexStu !=-1  ){
        console.log('davo roiiiiiii');
        console
        console.log('sssss', this.student.username)
      this.fromUpdateStu=this.fb.group({
      username:this.student.username,
      password:this.student.password,
      fullname:this.student.fullname,
      email:this.student.email,
      gender:this.student.gender,
      birthday:this.student.birthday,
      schoolfee:this.student.schoolfee,
      mark:this.student.marks
     });

     this.formPass=this.fb.group({
       passOld:'',
       passNew1:['',[Validators.minLength(6), Validators.maxLength(20)]],
       passNew2:'',
     });  
  }
  }
  onSubmitUpdate(){
    console.log(this.fromUpdateStu.value);
    this.student=this.fromUpdateStu.value;
    this.services.updateStudents(this.student);
  }
  showMK(){
    this.checkfrom=!this.checkfrom;
  }
  vesuatt(){
    this.checkfrom=!this.checkfrom;
  }
  changePass(){
    this.checkPass=false;
    this.checkPasss=false;
    console.log(this.formPass)
    if(this.formPass.controls.passNew1.value==this.formPass.controls.passNew2.value){
      if(this.formPass.controls.passOld.value==this.student.password){
        this.student.password=this.formPass.controls.passNew1.value;
        this.checkPass=true;
      }
    }
    if(this.checkPass==false){
      this.checkPasss=true;
    }
  }

}
// function validatorPass2(formcontrol:FormControl){
//   if(formcontrol.value!=null){
//       if(formcontrol.value==this.formPass.controls.passNew1.value){
//         return null;
//       }
//   }
//   return {errorPass : true};
// } 
