import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import {MyserviceService} from '../../myservice.service';



@Component({
  selector: 'blank',
  templateUrl: './blank.component.html'
})
export class BlankComponent implements OnInit {

  constructor( public routers:Router,private serv:MyserviceService){
  }

  ngOnInit() {
    this.serv.i=0;
    this.serv.pageno=0;
  }

  btnClick(){
    this.routers.navigate(['/one']);
    this.serv.pageno=1;
    console.log(this.serv.pageno);
 }
 
}
