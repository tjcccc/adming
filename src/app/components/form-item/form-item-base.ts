export enum FormItemType {
  InputText = 'text',
  InputNumber = 'number',
  InputPassword = 'password',
  InputMail = 'email',
  Select = 'select'
}

export class FormItemBase<T> {
  value: T;
  key: string;
  label: string;
  defaultValue: T;
  placeholder: string;
  limit: [number, number];
  controlType: FormItemType;
  validators: [any];
  errorMessage: string;

  constructor(setting: {
      value?: T,
      key?: string,
      label?: string,
      defaultValue?: T,
      placeholder?: string;
      limit?: [number, number];
      order?: number,
      controlType?: FormItemType,
      validators?: [any],
      errorMessage?: string
    } = {}) {
    this.value = setting.value;
    this.key = setting.key || '';
    this.label = setting.label || '';
    this.defaultValue = setting.defaultValue || undefined;
    this.placeholder = setting.placeholder || undefined;
    this.limit = setting.limit || [NaN, NaN];
    this.controlType = setting.controlType || FormItemType.InputText;
    this.validators = setting.validators || undefined;
    this.errorMessage = setting.errorMessage || '';
  }
}
