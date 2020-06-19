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

seconds: number = 5;
i:number;
message: string = '';
  ngOnInit() {
this.word1=this.serv.word1;
this.word2=this.serv.word2;
this.serv.pageno=this.serv.pageno+1;
this.i=this.serv.i;
this.countDown();
  }
  private countDown(): void {
    this.serv.intervalId = window.setInterval(() => {
      this.seconds -= 0.1;
      this.serv.seconds=this.seconds;
      if ((this.seconds).toFixed(1) == '0.0') {
        this.serv.anstext="You didn't attempted";
        this.routers.navigate(['/timer'])
      } 
    }, 100);
  }

}
