import { FormItemBase } from '@adming/components/form-item/form-item-base';

export class TextInputFormItem extends FormItemBase<string> {
  controlType = 'input-text';
  type: string;

  constructor(setting: {} = {}) {
    super(setting);
    this.type = setting['type'] || '';
  }
}
