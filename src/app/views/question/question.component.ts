import { Component, OnInit } from '@angular/core';
import { MyserviceService} from '../../myservice.service'
import { Router} from '@angular/router';

@Component({
  selector: 'question',
  templateUrl: './question.component.html'
})
export class QuestionComponent implements OnInit {

  constructor(private serv: MyserviceService,private routers:Router) { }
word1:String;
word2:String;

i:number;
intervalId: number = 0;
message: string = '';
seconds: number = 5;
  ngOnInit() {
this.word1=this.serv.word1;
this.word2=this.serv.word2;
this.serv.pageno=this.serv.pageno+1;
this.i=this.serv.i;
this.countDown();
  }
  private countDown(): void {
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.serv.anstext="You didn't attempted";
        this.routers.navigate(['/timer'])
      } 
    }, 1000);
  }
}
