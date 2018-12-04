import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormItemControlService } from '@adming/services/form/form-item-control.service';
import { FormItemService } from '@adming/services/form/form-item-service';
import { FormItemBase } from '@adming/components/form-item/form-item-base';
import { User } from '@adming/models/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [ FormItemControlService, FormItemService ]
})
export class FormComponent implements OnInit {

  admingForm: FormGroup;
  payLoad = '';

  // Form Items
  nameInput: FormItemBase<string>;
  ageInput: FormItemBase<number>;
  sexSelect: FormItemBase<string>;

  constructor(private formItemControlService: FormItemControlService, private formItemService: FormItemService) {
    const formItems = formItemService.userFormItems;
    this.nameInput = formItems.nameInput;
    this.ageInput = formItems.ageInput;
    this.sexSelect = formItems.sexSelect;

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
