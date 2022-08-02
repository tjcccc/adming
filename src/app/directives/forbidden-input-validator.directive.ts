import { Directive, Input } from '@angular/core';
import { Validator, ValidatorFn, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[admingForbiddenInputValidator]'
})
export class ForbiddenInputValidatorDirective implements Validator {
  @Input('admingForbiddenInputValidator') forbiddenInput: string[] = [];

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.forbiddenInput ? forbiddenInputValidator(this.forbiddenInput)(control) : null;
  }

  registerOnValidatorChange(fn: () => void) {
    throw new Error("Method not implemented.");
  }

  constructor() {}
}

// Recommend.
export function forbiddenInputValidator(names: string[]): ValidatorFn {
  const namesReg = new RegExp(names.join('|'), 'i');
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = namesReg.test(control.value);
    return forbidden ? { forbiddenInput: { value: control.value } } : null;
  };
}
