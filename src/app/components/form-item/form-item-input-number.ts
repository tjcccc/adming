import { FormItemBase, FormItemType } from './form-item-base';

export class NumberInputFormItem extends FormItemBase<number> {
  controlType = FormItemType.InputNumber;
  type: number;

  constructor(setting: {} = {}) {
    super(setting);
    this.type = setting['type'] || '';

  }
}
