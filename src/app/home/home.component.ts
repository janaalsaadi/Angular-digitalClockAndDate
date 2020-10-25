
import { Component, OnInit } from '@angular/core';
import {HomeService} from '../shared/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
 
})

export class HomeComponent {

  time = new Date();
  timer;
  valueChange :boolean;
  myDate = new Date().toString();

  ngOnInit() {
    this.timer = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy(){
    clearInterval(this.timer);
  }

  onValueChange(value: boolean) {
    this.valueChange = value;
  }
}