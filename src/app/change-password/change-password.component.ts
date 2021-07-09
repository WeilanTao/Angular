import { PassWordValidators } from './password.validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Form Practice
 */
@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent  {

  form: FormGroup;

  constructor(fb:FormBuilder) { 

  this.form=fb.group({
    oldPassWord:[
      '', 
      Validators.required,
      PassWordValidators.invalidOldPassword],
    newPassWord:['', Validators.required],
    confirmPassWord:['', 
        Validators.required,
        
    ],

  });
  }

  get oldPassWord(){
    return this.form.get('oldPassWord');
  }

  get newPassWord(){
    return this.form.get('newPassWord');
  }
  
  get confirmPassWord(){
    return this.form.get('confirmPassWord');
  }

}
