import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormItemBase } from 'adming';

@Injectable()
export class FormItemControlService {

  constructor() { }

  toFormGroup(formItems: FormItemBase<any>[]) {
    const group: any = {};

    formItems.forEach(formItem => {
      formItem.value = formItem.defaultValue || '';
      group[formItem.key] = new FormControl(formItem.value, formItem.validators);
    });

    return new FormGroup(group);
  }
}
