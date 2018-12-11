import { FormItemBase, FormItemType } from './form-item-base';

export class TextInputFormItem extends FormItemBase<string> {
  controlType = FormItemType.InputText;
  type: string;

  constructor(setting: {} = {}) {
    super(setting);
    this.type = setting['type'] || '';
  }
}

export class NumberInputFormItem extends FormItemBase<number> {
  controlType = FormItemType.InputNumber;
  type: number;

  constructor(setting: {} = {}) {
    super(setting);
    this.type = setting['type'] || '';

  }
}

export class PasswordInputFormItem extends FormItemBase<string> {
  controlType = FormItemType.InputPassword;
  type: string;

  constructor(setting: {} = {}) {
    super(setting);
    this.type = setting['type'] || '';
  }
}

export class MailInputFormItem extends FormItemBase<string> {
  controlType = FormItemType.InputMail;
  type: string;

  constructor(setting: {} = {}) {
    super(setting);
    this.type = setting['type'] || '';
  }
}
