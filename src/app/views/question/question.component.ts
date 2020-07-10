import { Component, OnInit } from '@angular/core';
import { MyserviceService} from '../../myservice.service'
import { Router} from '@angular/router';
import { trigger, keyframes, animate, transition } from "@angular/animations";
import * as swp from '../../swipe';
import { Subject } from 'rxjs';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: [ './question.component.css' ],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(swp.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(swp.swipeleft)))
    ])
  ]
})
export class QuestionComponent implements OnInit {

  constructor(private serv: MyserviceService,private routers:Router) { }
word1:String;
word2:String;
  parentSubject: Subject<any>;

  animationState: string;

seconds= this.serv.seconds;
i:number;
message: string = '';
  ngOnInit() {
     this.parentSubject.subscribe(event => {
      this.startAnimation(event)
    });
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
    }, 10000);
  }

  startAnimation(state) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState(state) {
    this.animationState = '';
  }


}
