import { Component,Input,Output,EventEmitter,OnInit} from '@angular/core';
import { Router} from '@angular/router'
import {MyserviceService} from './myservice.service'
import { Subject} from 'rxjs';
 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent implements OnInit  {
 @Input() gameData:any;
parentSubject:Subject<string> = new Subject();

  eventText = '';
  btnhide=false;
  data:any;
  composh:any
  sub:Subscription;
  constructor( private serv:MyserviceService){
  }
 ngOnInit() {
  this.sub = this.serv.compoShow$.subscribe(compoShow => this.composh = compoShow);
    this.serv.readData();
  }
  onSwipe(evt) {

      const x = Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 'right' : 'left'):'';
      const y = Math.abs(evt.deltaY) > 40 ? (evt.deltaY > 0 ? 'down' : 'up') : '';

      this.eventText= x==''?y:x;

      var page=this.serv.pageno;

      if(this.eventText=='left' && page==1)  {
       
        this.serv.changetext();
       // this.routers.navigate(['/two'],{ skipLocationChange: true });
    this.serv.compoChange('Two');
      }

      if(this.eventText=='left' && page==2){
        this.serv.question();
        //this.routers.navigate(['/question'],{ skipLocationChange: true });
        this.serv.compoChange('Question');
      }
      if(page>2 && page<=17 && this.eventText!='up'){
        
        this.parentSubject.next('swipe'+this.eventText);
        this.serv.getAnswer(this.eventText);
        this.serv.clearTimer();

        setTimeout(() =>{
         this.serv.compoChange('Timer');
      },500);
    }
      
}



}
