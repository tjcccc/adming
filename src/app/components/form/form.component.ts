import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormItemControlService } from '@adming/services/form/form-item-control.service';
import { TextInputFormItem, NumberInputFormItem } from '@adming/components/form-item/form-item-input';
import { SelectFormItem } from '@adming/components/form-item/form-item-select';
import { User } from '@adming/models/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  providers: [ FormItemControlService ]
})
export class FormComponent implements OnInit {

  admingForm: FormGroup;

  // Form Items
  nameInput = new TextInputFormItem({
    key: 'name',
    label: 'NAME',
    placeholder: 'Input your name.',
    // defaultValue: 'Tester',
    validators: [
      Validators.required
    ]
  });
  ageInput = new NumberInputFormItem({
    key: 'age',
    label: 'AGE',
    placeholder: 'Input your age.',
    defaultValue: 1,
    limit: [0, 200],
    validators: [
      Validators.required,
      Validators.min(0),
      Validators.max(200)
    ]
  });
  sexSelect = new SelectFormItem({
    key: 'sex',
    label: 'SEX',
    defaultValue: 'male',
    options: [
      { key: 'female', value: 'FEMALE', selected: true },
      { key: 'male', value: 'MALE', selected: false }
    ]
  });

  payLoad = '';

  constructor(private formItemControlService: FormItemControlService) {
    this.admingForm = this.formItemControlService.toFormGroup([
      this.nameInput,
      this.ageInput,
      this.sexSelect
    ]);
  }

  ngOnInit() { }

  onSubmit() {
    const user: User = this.admingForm.value;
    this.payLoad = JSON.stringify(user);
  }

}
