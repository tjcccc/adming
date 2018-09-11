export class FormItemBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  defaultValue: string;
  placeholder: string;
  limit: [number, number];
  controlType: string;

  constructor(setting: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      defaultValue?: string,
      placeholder?: string;
      limit?: [number, number];
      order?: number,
      controlType?: string
    } = {}) {
    this.value = setting.value;
    this.key = setting.key || '';
    this.label = setting.label || '';
    this.required = !!setting.required;
    this.defaultValue = setting.defaultValue || undefined;
    this.placeholder = setting.placeholder || undefined;
    this.limit = setting.limit || [NaN, NaN];
    this.controlType = setting.controlType || '';
  }
}
