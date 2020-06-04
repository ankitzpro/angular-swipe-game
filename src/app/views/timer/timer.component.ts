import { Component, OnInit } from '@angular/core';
import { MyserviceService} from '../../myservice.service';
import { Router} from '@angular/router';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html'
})
export class TimerComponent implements OnInit {

  constructor(private serv: MyserviceService,private routers:Router) { }
anstext:String;
intervalId: number = 0;
message: string = '';
seconds: number = 5;

  ngOnInit() {
this.anstext=this.serv.anstext;
this.countDown();
  }
  private countDown(): void {
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0 ) {
        if(this.serv.pageno>=17){
          this.routers.navigate(['/blank'])
        }
        else{
          this.serv.question();
        this.routers.navigate(['/question'])
      } 
    }
    }, 1000);
  }
}
