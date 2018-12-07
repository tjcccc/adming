import { FormItemBase, FormItemType } from './form-item-base';

export class PasswordInputFormItem extends FormItemBase<string> {
  controlType = FormItemType.InputPassword;
  type: string;

  constructor(setting: {} = {}) {
    super(setting);
    this.type = setting['type'] || '';
  }
}
