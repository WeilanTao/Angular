import { UserValidators } from './username.validator';
import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

/**
 * Validation; Asynchronous Operators; Loader Image; Sumbit validator
 */
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  signinform=new FormGroup({
    'account': new FormGroup({
      'username': new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ], 
      UserValidators.shouldBeUnique),
      'password': new FormControl('',Validators.required)
    }),
  });

  get username(){
    return this.signinform.get('account.username');
  }

  login(){
    this.signinform.setErrors({
      invalidLogin:true
    });
    // let isValid=authService.login(this.signinform.value);
    // if(!isValid){
    //   this.signinform.setErrors({
    //     invalidLogin:true;
    //   })
    // }
  }
}
