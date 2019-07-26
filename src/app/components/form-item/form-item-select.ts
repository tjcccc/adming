import { FormItemTerm, FormItemType, FormItemBase } from './form-item-base';

export class SelectFormItem extends FormItemBase<string> {
  controlType = FormItemType.Select;
  options: { key: string, value: string, selected: boolean }[] = [];

  constructor(setting: {} = {}) {
    super(setting);
    this.options = setting[FormItemTerm.Options] || [];
  }
}
