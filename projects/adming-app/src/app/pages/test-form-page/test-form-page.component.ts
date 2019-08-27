import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormItemControlService } from '@adming-app/services/form/form-item-control.service';
import { TextInputFormItem, NumberInputFormItem, SelectFormItem } from 'adming';
import { User } from '@adming-app/models/user.model';

@Component({
  selector: 'adming-test-form-page',
  templateUrl: './test-form-page.component.html',
  providers: [ FormItemControlService ]
})
export class TestFormPageComponent implements OnInit {

  testForm: FormGroup;

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
    this.testForm = this.formItemControlService.toFormGroup([
      this.nameInput,
      this.ageInput,
      this.sexSelect
    ]);
  }

  ngOnInit() { }

  onSubmit() {
    const user: User = this.testForm.value;
    this.payLoad = JSON.stringify(user);
  }

}
