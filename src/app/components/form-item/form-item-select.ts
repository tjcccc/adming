import { FormItemBase, FormItemType } from './form-item-base';

export class SelectFormItem extends FormItemBase<string> {
  controlType = FormItemType.Select;
  options: { key: string, value: string, selected: boolean }[] = [];

  constructor(setting: {} = {}) {
    super(setting);
    this.options = setting['options'] || [];
  }
}
