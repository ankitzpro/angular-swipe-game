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
  parentSubject:Subject<string> = new Subject();
@Input() gameData:any;
@Output() scoreData:EventEmitter<any>= new EventEmitter();  

  eventText = '';
  btnhide=false;
  
  constructor( public routers:Router,private serv:MyserviceService){
  }
 ngOnInit() {
    this.serv.readData();
    this.routers.navigate([''])
  }
  onSwipe(evt) {

      const x = Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 'right' : 'left'):'';
      const y = Math.abs(evt.deltaY) > 40 ? (evt.deltaY > 0 ? 'down' : 'up') : '';

      this.eventText= x==''?y:x;

      var page=this.serv.pageno;

      if(this.eventText=='left' && page==1)  {
       
        this.serv.changetext();
        this.routers.navigate(['/two'])
      }

      if(this.eventText=='left' && page==2){
        this.serv.question();
        this.routers.navigate(['/question']);
      }
      if(page>2 && page<=17 && this.eventText!='up'){
        var value = this.eventText='left'? 'swipeleft' :'swiperight';
        this.parentSubject.next(value);
        this.serv.clearTimer();
        this.serv.getAnswer(this.eventText);
       this.routers.navigate(['/timer']); 
      }
      
}

sendValues(){
  this.scoreData.emit(this.serv.score);
}


}
