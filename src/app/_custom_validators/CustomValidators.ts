import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import * as moment from "moment";

export function expirationDate(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if(control.value) {
      try {
        let splitedDate = control.value.match(/(\d\d)(\d\d)/);
        let month = splitedDate[1];
        let year = splitedDate[2];
        let momentDate = moment(`${month}/${year}`,'MM/YY');
        let acceptedDate = moment();
        return momentDate.isAfter(acceptedDate) ? null : {expirationDate: true};
      }catch (e) {
        return {expirationDate: true};
      }
    }
    return null;
  };
}


export function email(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let emailRegExp = /^[a-zA-Z][a-zA-Z0-9.]+[a-zA-Z0-9]@[a-zA-Z]([a-zA-Z0-9.\-]+)?[a-zA-Z0-9]\.[a-zA-Z]{2,3}$/
    let controlValue = control.value;
    if(controlValue) {
      try {
        return emailRegExp.test(controlValue)? null : {email: true};
      }catch (e) {
        return {email: true};
      }
    }
    return null;
  };
}
