import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { DataServicesService } from '../../Services/data-services.service';
import { Quiz } from '../../typeClass/Quiz';
import { Subject } from '../../typeClass/Subject';
import { Score } from '../../typeClass/Score';

@Component({
  selector: 'app-quiztest',
  templateUrl: './quiztest.component.html',
  styleUrls: ['./quiztest.component.css']
})
export class QuiztestComponent implements OnInit {

  id:any;
  subjects:any;
  nameSubject = '';
  data: any;
  Quizs: Quiz[] = [];
  numberPages = 1;
  Scores: Score[] = [];
  docs: Score = {NumberAns: 1, Score: 0};
  score = 0;
  x:any;

  constructor(private router: Router, private services: DataServicesService, private route: ActivatedRoute) { }
   ngOnInit(){
  this.route.paramMap.subscribe( para =>{
      this.id = para.get('Id');
    });
    this.services.getSubjects().subscribe(data =>{
      this.subjects =data;
      this.subjects.forEach(element => {
        if(this.id == element.Id){
          this.nameSubject = element.Name;
        }
      });
    });
    this.services.getQuiz(this.id).subscribe( data => {
        this.data = data;
        this.data.forEach(element => {
          this.Quizs.push(element);   
        });
        for(let i = 1 ; i <= this.Quizs.length ; i++){
          this.docs = { NumberAns: i , Score: 0 }
          this.Scores.push(this.docs);
        }
    })
  }

  sendRes(id, qui){
    this.Scores[this.numberPages -1].Score = 0;
    if( id == qui.AnswerId){
      this.Scores[this.numberPages -1].Score = 1;
    }
  }

  sendServer(){
    this.Scores.forEach(docs =>{
      this.score += docs.Score;
    });
    this.services.sendQK(this.nameSubject, this.score).subscribe(data =>{
      this.x = data;
    });
    alert(`Bạn đã làm đươc ${this.score}/${this.Scores.length}, Hãy Check Email để kiểm tra nào`);
    this.router.navigate(['/categories']);
  }

  nextAns(){
    if(this.numberPages < this.Quizs.length ){
      this.numberPages ++;
    }
  }
  
  periodAns(){
    if(this.numberPages > 1){
      this.numberPages --;
    }
  }  
}


