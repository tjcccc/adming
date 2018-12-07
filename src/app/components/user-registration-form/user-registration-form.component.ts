import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormItemControlService } from '@adming/services/form/form-item-control.service';
import { FormItemService } from '@adming/services/form/form-item-service';
import { FormItemBase } from '@adming/components/form-item/form-item-base';
import { User } from '@adming/models/user.model';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  providers: [ FormItemControlService, FormItemService ]
})
export class UserRegistrationFormComponent implements OnInit {

  userRegistrationForm: FormGroup;
  payLoad = '';

  // Form Items
  emailInput: FormItemBase<string>;
  usernameInput: FormItemBase<string>;
  passwordInput: FormItemBase<string>;
  passwordConfirmationInput: FormItemBase<string>;

  constructor(private formItemControlService: FormItemControlService, private formItemService: FormItemService) {
    const formItems = formItemService.userRegistrationFormItems;
    this.emailInput = formItems.emailInput;
    this.usernameInput = formItems.usernameInput;
    this.passwordInput = formItems.passwordInput;
    this.passwordConfirmationInput = formItems.passwordConfirmationInput;

    this.userRegistrationForm = this.formItemControlService.toFormGroup([
      this.emailInput,
      this.usernameInput,
      this.passwordInput,
      this.passwordConfirmationInput
    ]);
  }

  ngOnInit() {
  }

  onSubmit() {
    const user: User = this.userRegistrationForm.value;
    this.payLoad = JSON.stringify(user);
  }

}
