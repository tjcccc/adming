import { Injectable } from '@angular/core';
import { TextInputFormItem } from '@adming/components/form-item/form-item-input-text';
import { NumberInputFormItem } from '@adming/components/form-item/form-item-input-number';
import { PasswordInputFormItem } from '@adming/components/form-item/form-item-input-password';
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

  userRegistrationFormItems = {
    emailInput: new TextInputFormItem({
      type: 'text',
      key: 'email',
      label: 'E-Mail',
      placeholder: 'Input your e-mail address.',
      require: true
    }),
    usernameInput: new TextInputFormItem({
      type: 'text',
      key: 'username',
      label: 'Username',
      placeholder: 'Input your username.',
      require: true
    }),
    passwordInput: new PasswordInputFormItem({
      type: 'password',
      key: 'password',
      label: 'Password',
      placeholder: 'Input your password',
      require: true
    }),
    passwordConfirmationInput: new PasswordInputFormItem({
      type: 'password',
      key: 'passwordComfirmation',
      label: 'Confirm Password',
      placeholder: 'Input your password again.',
      require: true
    })
  };
}
