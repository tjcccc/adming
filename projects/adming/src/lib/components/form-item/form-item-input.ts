import { FormItemTerm, FormItemType, FormItemBase } from './form-item-base';

export class TextInputFormItem extends FormItemBase<string> {
  controlType = FormItemType.InputText;
  type: string;

  constructor(setting: {} = {}) {
    super(setting);
    this.type = setting[FormItemTerm.Type] || '';
  }
}

export class NumberInputFormItem extends FormItemBase<number> {
  controlType = FormItemType.InputNumber;
  type: number;

  constructor(setting: {} = {}) {
    super(setting);
    this.type = setting[FormItemTerm.Type] || '';

  }
}

export class PasswordInputFormItem extends FormItemBase<string> {
  controlType = FormItemType.InputPassword;
  type: string;

  constructor(setting: {} = {}) {
    super(setting);
    this.type = setting[FormItemTerm.Type] || '';
  }
}

export class MailInputFormItem extends FormItemBase<string> {
  controlType = FormItemType.InputMail;
  type: string;

  constructor(setting: {} = {}) {
    super(setting);
    this.type = setting[FormItemTerm.Type] || '';
  }
}
