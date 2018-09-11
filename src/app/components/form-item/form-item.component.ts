import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormItemBase } from '@adming/components/form-item/form-item-base';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() formControl: FormControl;
  @Input() formItem: FormItemBase<any>;

  constructor() { }

  ngOnInit() {
    // Set the default option for select.
    if (this.formItem.controlType === 'select') {
      this.form.get(this.formItem.key).setValue(this.formItem.defaultValue || null);
    }
  }

  get isValid() {
    return this.form.controls[this.formItem.key].valid;
  }

}
