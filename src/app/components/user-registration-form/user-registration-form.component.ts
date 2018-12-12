import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormItemControlService } from '@adming/services/form/form-item-control.service';
import { TextInputFormItem, MailInputFormItem, PasswordInputFormItem } from '@adming/components/form-item/form-item-input';
import { User } from '@adming/models/user.model';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  providers: [ FormItemControlService ]
})
export class UserRegistrationFormComponent implements OnInit {

  userRegistrationForm: FormGroup;

  // Form Items
  emailInput = new MailInputFormItem({
    type: 'email',
    key: 'email',
    label: 'E-MAIL',
    placeholder: 'Input your e-mail address.',
    required: true,
    validators: [
      Validators.required
    ],
    errorMessage: 'Your inputed E-mail is invalid.'
  });
  usernameInput = new TextInputFormItem({
    type: 'text',
    key: 'name',
    label: 'NAME',
    placeholder: 'Input your username.',
    required: true
  });
  passwordInput = new PasswordInputFormItem({
    type: 'password',
    key: 'password',
    label: 'PASSWORD',
    placeholder: 'Input your password.',
    required: true
  });
  passwordConfirmationInput = new PasswordInputFormItem({
    type: 'password',
    key: 'passwordComfirmation',
    label: 'CONFIRM PASSWORD',
    placeholder: 'Input your password again.',
    required: true
  });

  payLoad = '';

  constructor(private formItemControlService: FormItemControlService) {
    this.userRegistrationForm = this.formItemControlService.toFormGroup([
      this.emailInput,
      this.usernameInput,
      this.passwordInput,
      this.passwordConfirmationInput
    ]);
  }

  ngOnInit() { }

  onSubmit() {
    const user: User = this.userRegistrationForm.value;
    this.payLoad = JSON.stringify(user);
  }

}
