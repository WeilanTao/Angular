import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PassWordValidators{

    static invalidOldPassword(control: AbstractControl) :Promise<ValidationErrors | null>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                // console.log(control);

                if(control.value!=='1234'){
                    resolve({invalidOldPassword: true});
                }
                else{
                    resolve(null);
                }
            }, 2000);
        });
    }

    static isMatchPassword(control: AbstractControl){
       
                let newPassword= control.get('newPassWord');
                let confirmPassword= control.get('confirmPassWord');

                 console.log(control);
                if(newPassword?.value!== confirmPassword?.value){
                    return {isMatchPassword: true};
                }
                return null;
           
    }
    
}