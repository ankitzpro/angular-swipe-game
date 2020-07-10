import { Component, OnInit,Input } from '@angular/core';
import { MyserviceService} from '../../myservice.service'
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
      transition('* => swipeleft', animate(750, keyframes(swp.swipeleft))),
      transition('* => swipedown', animate(750, keyframes(swp.swipedown)))
    ])
  ]
})
export class QuestionComponent implements OnInit {

  constructor(private serv: MyserviceService) { }
word1:String;
word2:String;
@Input()
parentSubject: Subject<any>;

animationState: string;


seconds= this.serv.seconds;
i=this.serv.i;
tot=this.serv.quesarray.length
message: string = '';
  ngOnInit() {this.parentSubject.subscribe(event => {
    this.startAnimation(event)
  });
this.word1=this.serv.word1;
this.word2=this.serv.word2;
this.serv.pageno=this.serv.pageno+1;
this.countDown();
  }
  private countDown(): void {
    this.serv.intervalId = window.setInterval(() => {
      this.seconds -= 0.1;
      this.serv.seconds=this.seconds;
      if ((this.seconds).toFixed(1) == '0.0') {
        this.serv.anstext="You didn't attempted";
        //this.routers.navigate(['/timer'],{ skipLocationChange: true })
        this.serv.compoChange('Timer');
      } 
    }, 100);
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
