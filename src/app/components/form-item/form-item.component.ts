import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormItemBase, FormItemType } from './form-item-base';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html'
})
export class FormItemComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() formControl: FormControl;
  @Input() formItem: FormItemBase<any>;
  @Input() matchingItem: FormItemBase<any>;

  formItemType = FormItemType;
  isError = false;

  constructor() { }

  ngOnInit() {
    // Set the default option for select.
    if (this.formItem.controlType === FormItemType.Select) {
      this.form.get(this.formItem.key).setValue(this.formItem.defaultValue || null);
    }
  }

  get isValid() {
    return this.form.controls[this.formItem.key].valid;
  }

  get isDirty() {
    return this.form.controls[this.formItem.key].dirty;
  }

  get hasValue() {
    return this.form.controls[this.formItem.key].value !== '';
  }

  get isMatched() {
    return this.form.controls[this.formItem.key].value === this.form.controls[this.matchingItem.key].value;
  }

  validate = (event: any) => {
    if (this.matchingItem !== undefined) {
      this.isError = !this.isMatched && this.isDirty && this.hasValue;
      return;
    }
    this.isError = !this.isValid && this.isDirty && this.hasValue;
  }
}
