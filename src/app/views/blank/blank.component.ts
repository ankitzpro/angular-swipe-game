import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import {MyserviceService} from '../../myservice.service';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';



@Component({
  selector: 'blank',
  templateUrl: './blank.component.html'
})
export class BlankComponent implements OnInit {

  constructor( public routers:Router,private serv:MyserviceService,
    public formBuilder: FormBuilder){
  }
  public myForm : FormGroup;
    submitted = false;

  ngOnInit() {
    this.serv.i=0;
    this.serv.pageno=0;
    this.createForm();
  }
  get f() { return this.myForm.controls; }

  createForm(){
    this.myForm  = this.formBuilder.group({
     email: ['', Validators.required],
     level:['Easy']
   });
   }

   onSubmit(){
    this.submitted = true;
    if (this.myForm.invalid) {
          return;
        }
        
        var formData=this.myForm.value;
        this.serv.userData(formData);
        this.routers.navigate(['/one']);
        this.serv.pageno=1;
   }

}
 

