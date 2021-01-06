import { Directive, Input } from '@angular/core';
import { ValidationErrors, Validator, NG_VALIDATORS, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appCustomFieldvalidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomFieldvalidatorDirective, multi: true}],
})
export class CustomFieldvalidatorDirective implements Validator {

  constructor() { }
  @Input('firstfield') firstfield:string;
  @Input('secondfield') secondfield:string;

  validate(form: FormGroup): ValidationErrors {
    if(!form.controls[this.firstfield] || !form.controls[this.secondfield])
    {
      return null;
    }
    if(Object.keys(form.controls[this.firstfield].errors || []).filter(u=> u !== 'compareFieldValidator').length>0 ||
    Object.keys(form.controls[this.secondfield].errors || []).filter(u=> u !== 'compareFieldValidator').length>0)
    {
      return null;
    }
    if(form.controls[this.firstfield].value !== form.controls[this.secondfield].value)
    {
      form.controls[this.firstfield].setErrors({compareFieldValidator: true});
      form.controls[this.secondfield].setErrors({compareFieldValidator: true}); 
      return {compareFieldValidator: true};
    }
    if(form.controls[this.firstfield].hasError('compareFieldValidator'))
    {
      delete form.controls[this.firstfield].errors['compareFieldValidator']
      form.controls[this.firstfield].setErrors(null);
    }
    if(form.controls[this.secondfield].hasError('compareFieldValidator'))
    {
      delete form.controls[this.secondfield].errors['compareFieldValidator']
      form.controls[this.secondfield].setErrors(null);
    }
    
    return null;
  }
 

}
