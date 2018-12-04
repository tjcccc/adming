import { FormItemBase, FormItemType } from './form-item-base';

export class TextInputFormItem extends FormItemBase<string> {
  controlType = FormItemType.InputText;
  type: string;

  constructor(setting: {} = {}) {
    super(setting);
    this.type = setting['type'] || '';
  }
}
