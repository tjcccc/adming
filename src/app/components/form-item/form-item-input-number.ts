import { FormItemBase } from '@adming/components/form-item/form-item-base';

export class NumberInputFormItem extends FormItemBase<string> {
  controlType = 'input-number';
  type: string;

  constructor(setting: {} = {}) {
    super(setting);
    this.type = setting['type'] || '';

  }
}
