import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemBase } from '@adming/components/form-item/form-item-base';

@Injectable()
export class FormItemControlService {
  constructor() { }

  toFormGroup(formItems: FormItemBase<any>[]) {
    const group: any = {};

    formItems.forEach(formItem => {
      group[formItem.key] = formItem.required ?
        new FormControl(formItem.value || '', Validators.required) : new FormControl(formItem.value || '');
    });
    return new FormGroup(group);
  }
}
