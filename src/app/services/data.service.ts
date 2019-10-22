import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Students} from './../typeclass/Students';
import { from } from 'rxjs';
import { templateJitUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {
Students:Students[]=[];
data:any;
lengthstu:any;
student:any;
stu:Students;
indexStu=-1;
objStu:Students;
checklogin=false;
removee:Students[]=[];
x:any;
  constructor(private http :HttpClient) { }
  urlSubj='assets/TaiNguyen/db/Subjects.js';
  urlStud='assets/TaiNguyen/db/Students.js';
   getSubjects(){
     return this.http.get(this.urlSubj);
   }
   getstu(){
     return this.http.get(this.urlStud)
   }
   getStud(){
    this.getstu().subscribe(data=>{
      this.data=data;
      this.lengthstu=this.data.length;
      console.log('chiau daiiii',this.lengthstu)
      for(let i= 0;i<this.lengthstu;i++){
         this.student=this.data[i];;  
        this.Students[i]=this.student;
      }   
      this.objStu=this.Students[this.indexStu];
     })
     return this.Students;
   }
   updateStudents(stu:Students){
     console.log('studene' ,this.Students);
      this.removee=this.Students.splice(this.indexStu,1,stu);
      this.objStu=this.Students[this.indexStu];
   }
   getobjStudent(stu:Students){  
     console.log('day la obj' , this.objStu);
     return this.objStu;  
   }
   addStudent(stu:Students){
      this.x=this.Students.push(stu);
   }
   setcheckLogin(check:boolean){
      this.checklogin=check;
   }
   setIndexStu(index:number){
      this.indexStu=index;
   }
   getIndexStu(){
     return this.indexStu;
   }
   getQuiz(url:string){
     return this.http.get(url);
   }
 }
 

