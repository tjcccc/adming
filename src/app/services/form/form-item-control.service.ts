import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemBase } from '@adming/components/form-item/form-item-base';

@Injectable()
export class FormItemControlService {

  constructor() { }

  toFormGroup(formItems: FormItemBase<any>[]) {
    const group: any = {};

    formItems.forEach(formItem => {
      // Set default value
      if (formItem.defaultValue !== undefined) {
        formItem.value = formItem.defaultValue;
      }

      group[formItem.key] = formItem.validators ?
        new FormControl(formItem.value || '', formItem.validators) : new FormControl(formItem.value || '');
    });
    return new FormGroup(group);
  }
}
