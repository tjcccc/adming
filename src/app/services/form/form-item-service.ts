import { Injectable } from '@angular/core';
import { TextInputFormItem } from '@adming/components/form-item/form-item-input-text';
import { NumberInputFormItem } from '@adming/components/form-item/form-item-input-number';
import { SelectFormItem } from '@adming/components/form-item/form-item-select';

@Injectable()
export class FormItemService {
  userFormItems = {
    nameInput: new TextInputFormItem({
      key: 'name',
      label: 'NAME',
      placeholder: 'Input your name.',
      // defaultValue: 'Tester',
      required: true
    }),
    ageInput: new NumberInputFormItem({
      key: 'age',
      label: 'AGE',
      placeholder: 'Input your age.',
      defaultValue: 1,
      limit: [0, 200],
      required: true
    }),
    sexSelect: new SelectFormItem({
      key: 'sex',
      label: 'SEX',
      defaultValue: 'male',
      options: [
        { key: 'female', value: 'FEMALE', selected: true },
        { key: 'male', value: 'MALE', selected: false }
      ]
    })
  };
}
