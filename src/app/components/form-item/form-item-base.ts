export enum FormItemType {
  InputText = 'text',
  InputNumber = 'number',
  InputPassword = 'password',
  Select = 'select'
}

export class FormItemBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  defaultValue: T;
  placeholder: string;
  limit: [number, number];
  controlType: FormItemType;

  constructor(setting: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      defaultValue?: T,
      placeholder?: string;
      limit?: [number, number];
      order?: number,
      controlType?: FormItemType
    } = {}) {
    this.value = setting.value;
    this.key = setting.key || '';
    this.label = setting.label || '';
    this.required = !!setting.required;
    this.defaultValue = setting.defaultValue || undefined;
    this.placeholder = setting.placeholder || undefined;
    this.limit = setting.limit || [NaN, NaN];
    this.controlType = setting.controlType || FormItemType.InputText;
  }
}
