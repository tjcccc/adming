import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  emailInput = new MailInputFormItem({
    type: 'email',
    key: 'email',
    label: 'E-Mail',
    placeholder: 'Input your e-mail address.',
    require: true
  });

  usernameInput = new TextInputFormItem({
    type: 'text',
    key: 'username',
    label: 'Username',
    placeholder: 'Input your username.',
    require: true
  });

  passwordInput = new PasswordInputFormItem({
    type: 'password',
    key: 'password',
    label: 'Password',
    placeholder: 'Input your password',
    require: true
  });

  passwordConfirmationInput = new PasswordInputFormItem({
    type: 'password',
    key: 'passwordComfirmation',
    label: 'Confirm Password',
    placeholder: 'Input your password again.',
    require: true
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

  ngOnInit() {
  }

  onSubmit() {
    const user: User = this.userRegistrationForm.value;
    this.payLoad = JSON.stringify(user);
  }

}
