import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'formbuildersample',
  templateUrl: './formbuildersample.component.html',
  styleUrls: ['./formbuildersample.component.css']
})
export class FormbuildersampleComponent {

  form;

  constructor(fb:FormBuilder){
   this.form= fb.group({
      name:['', Validators.required],
      contact:fb.group({
        email:[],
        phone:[]
      }),
      topics:fb.array([])
    });
  }


}
