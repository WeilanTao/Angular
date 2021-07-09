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

  changepasswordform: FormGroup;

  constructor(fb:FormBuilder) { 

  this.changepasswordform=fb.group({
    oldPassWord:[
      '', 
      Validators.required,
      PassWordValidators.invalidOldPassword],
    newPassWord:['', Validators.required],
    confirmPassWord:['', Validators.required]
  },{
    validator: PassWordValidators.isMatchPassword
  });
  }

  get oldPassWord(){
    return this.changepasswordform.get('oldPassWord');
  }

  get newPassWord(){
    return this.changepasswordform.get('newPassWord');
  }
  
  get confirmPassWord(){
    return this.changepasswordform.get('confirmPassWord');
  }

}
