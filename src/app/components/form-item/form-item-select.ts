import { FormItemBase } from '@adming/components/form-item/form-item-base';

export class SelectFormItem extends FormItemBase<string> {
  controlType = 'select';
  options: { key: string, value: string, selected: boolean }[] = [];

  constructor(setting: {} = {}) {
    super(setting);
    this.options = setting['options'] || [];
  }
}
