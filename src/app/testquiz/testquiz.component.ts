import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from './../services/data.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-testquiz',
  templateUrl: './testquiz.component.html',
  styleUrls: ['./testquiz.component.css']
})
export class TestquizComponent implements OnInit {
  quizs:any;
  subje:any;
  url:string;
  id:string;
  name:string;
  showDiem=true;
  checkLogin=false;
  thongtin={
    valuee:0,
  };
  countpage=1;
  socer=0;
  indexAns=1;
  constructor(private _data :DataService,
    private route :ActivatedRoute) { }
    ngOnInit() {
      this.route.paramMap.subscribe(
        para=>{
          this.id = para.get('Id');
          this.name=para.get('Name');
        }
      );
  this.url='assets/TaiNguyen/db/Quizs/'+this.id+'.js';
  console.log(this.url)
    this._data.getQuiz(this.url).subscribe((data)=>{
        this.quizs=data; 
      });
      this._data.getSubjects().subscribe((dt)=>{
          this.subje=dt;
      });
      if(this._data.checklogin==true){
        this.checkLogin=true;
      }
    }
  loadPage(){
    location.reload();
    console.log('dang load')
  }
  reponsiveTest(qui){
    if(this.thongtin.valuee==qui.AnswerId){
      this.socer+=qui.Marks;
      
    }
    if(this.countpage<80){
      this.countpage++;
      this.indexAns++;
    }
    // if(this.countpage===80){
    //   this.showDiem=!this.showDiem;
    // }
    console.log('diem: ',this.socer);
  }
  luiPage(){
    if(this.countpage>1){
      this.countpage--;
    }
  }


}
