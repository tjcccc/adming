import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormItemControlService } from '@adming/services/form/form-item-control.service';
import { TextInputFormItem, NumberInputFormItem } from '@adming/components/form-item/form-item-input';
import { SelectFormItem } from '@adming/components/form-item/form-item-select';
import { User } from '@adming/models/user.model';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss'],
  providers: [ FormItemControlService ]
})
export class TestFormComponent implements OnInit {

  testForm: FormGroup;
  payLoad = '';

  // Form Items
  nameInput = new TextInputFormItem({
    key: 'name',
    label: 'NAME',
    placeholder: 'Input your name.',
    // defaultValue: 'Tester',
    required: true
  });
  ageInput = new NumberInputFormItem({
    key: 'age',
    label: 'AGE',
    placeholder: 'Input your age.',
    defaultValue: 1,
    limit: [0, 200],
    required: true
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
