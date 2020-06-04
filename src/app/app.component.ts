import { Component } from '@angular/core';
import { Router} from '@angular/router'
import {MyserviceService} from './myservice.service'
 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent  {
  eventText = '';
  

  btnhide=false;
  constructor( public routers:Router,private serv:MyserviceService){
  }
 ngOnInit() {
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
        switch(this.eventText) { 
          case 'left': { 
            this.serv.anstext=this.serv.answer=='same' ? 'Correct Answer' : 'Incorrect Answer';
             break; 
          } 
          case 'right': { 
            this.serv.anstext=this.serv.answer=='opposite' ? 'Correct Answer' : 'Incorrect Answer';
            break; 
         } case 'down': { 
          this.serv.anstext=this.serv.answer=='other' ? 'Correct Answer' : 'Incorrect Answer';
          break; 
          } 
       }
       this.routers.navigate(['/timer']); 
      }
      
}



}
