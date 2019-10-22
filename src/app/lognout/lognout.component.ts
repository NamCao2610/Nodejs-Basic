import { Component, OnInit } from '@angular/core';
import {DataService} from './../services/data.service';

@Component({
  selector: 'app-lognout',
  templateUrl: './lognout.component.html',
  styleUrls: ['./lognout.component.css']
})
export class LognoutComponent implements OnInit {

  constructor(private services: DataService) { }

  ngOnInit() {
    this.services.setcheckLogin(false);
    console.log('loginnnn',this.services.Students);
  }

}
