import { Component, OnInit } from '@angular/core';

import { DataServicesService } from '../../Services/data-services.service';
import { Subject } from '../../typeClass/Subject';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  Subjects: Subject[] = [];
  data:any;
  nextpages = 4;
  name = '';

  constructor(private services: DataServicesService) { }

  ngOnInit() {
    this.name = localStorage.getItem('name');
    this.services.getSubjects().subscribe(data => {
      this.data = data;
      this.data.forEach(element => {
        this.Subjects.push(element);
      });
    })
  }
  
  Loadthem(){
    if(this.Subjects.length - this.nextpages >=4){
      this.nextpages += 4;
    }
  }

}
