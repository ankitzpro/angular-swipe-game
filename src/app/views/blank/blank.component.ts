import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../../myservice.service';



@Component({
  selector: 'blank',
  templateUrl: './blank.component.html'
})
export class BlankComponent implements OnInit {

  constructor(private serv:MyserviceService){
  }
    submitted = false;

  ngOnInit() {
    this.serv.i=0;
    this.serv.pageno=0;
  }

   onSubmit(){
    this.submitted = true;
        
        //this.routers.navigate(['/one'],{ skipLocationChange: true });
        this.serv.compoChange('One');
        this.serv.pageno=1;
   }

}
 

