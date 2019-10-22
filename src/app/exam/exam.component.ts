import { Component, OnInit } from '@angular/core';
import {DataService} from './../services/data.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  subject:any;
  constructor(private service:DataService) { }
iteam=4;
countPage=1;
  ngOnInit() {
    this.service.getSubjects().subscribe(data=>{
      this.subject=data;
    })
  }  
  luiPage(){
    if(this.countPage>=2){
      this.countPage--;
    }
  }
  tangIteam(){
    if(20/this.iteam>this.countPage){
      this.iteam++;
  }
}
  giamIteam(){
    if(this.iteam>=2){
      this.iteam--;
    }
  }
  tangPage(){
    if(20/this.iteam>this.countPage){
      this.countPage++;
    }
  }
}

