import { Directive, Input } from '@angular/core';
import { Validator, ValidatorFn, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appForbiddenInputValidator]'
})
export class ForbiddenInputValidatorDirective implements Validator {
  @Input('appForbiddenInputValidator') forbiddenInput: string[];

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.forbiddenInput ? forbiddenInputValidator(this.forbiddenInput)(control) : null;
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
  constructor() { }

}

// Recommend.
export function forbiddenInputValidator(names: string[]): ValidatorFn {
  const namesRe = new RegExp(names.join('|'), 'i');
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = namesRe.test(control.value);
    return forbidden ? { 'forbiddenName': { value: control.value } } : null;
  };
}
