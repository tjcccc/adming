import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormItemControlService } from '@adming/services/form/form-item-control.service';
import { FormItemService } from '@adming/services/form/form-item-service';
import { FormItemBase } from '@adming/components/form-item/form-item-base';

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
  ageInput: FormItemBase<string>;
  sexSelect: FormItemBase<string>;

  constructor(private formItemControlService: FormItemControlService, private formItemService: FormItemService) {
    this.nameInput = formItemService.nameInput;
    this.ageInput = formItemService.ageInput;
    this.sexSelect = formItemService.sexSelect;

    this.admingForm = this.formItemControlService.toFormGroup([
      this.nameInput,
      this.ageInput,
      this.sexSelect
    ]);
  }

  ngOnInit() { }

  onSubmit() {
    this.payLoad = JSON.stringify(this.admingForm.value);
  }

}
