import { Component, OnInit } from '@angular/core';
import { MyserviceService} from '../../myservice.service'

@Component({
  selector: 'one',
  templateUrl: './one.component.html'
})
export class OneComponent implements OnInit {

  constructor(private serv: MyserviceService) { }
text:String;
  ngOnInit() {
this.text=this.serv.text;
  }

}
