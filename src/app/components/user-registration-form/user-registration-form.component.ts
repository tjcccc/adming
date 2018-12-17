import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { terms } from '@adming/config/terms.config';
import { FormItemControlService } from '@adming/services/form/form-item-control.service';
import { UserService } from '@adming/services/user/user.service';
import { TextInputFormItem, MailInputFormItem, PasswordInputFormItem } from '@adming/components/form-item/form-item-input';
import { forbiddenInputValidator } from '@adming/directives/form/forbidden-input-validator.directive';
import { forbiddenName } from '@adming/config/forbidden-name.config';
import { User } from '@adming/models/user.model';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  providers: [ FormItemControlService ]
})
export class UserRegistrationFormComponent implements OnInit {

  pagetitle = 'Adming Form';
  userRegistrationForm: FormGroup;

  // Form Items
  emailInput = new MailInputFormItem({
    type: 'email',
    key: 'email',
    label: terms.label.email,
    placeholder: terms.phrase.inputMail,
    required: true,
    validators: [
      Validators.required
    ],
    errorMessage: terms.phrase.mailError
  });
  usernameInput = new TextInputFormItem({
    type: 'text',
    key: 'name',
    label: terms.label.name,
    placeholder: terms.phrase.inputUsername,
    required: true,
    validators: [
      forbiddenInputValidator(forbiddenName)
    ],
    errorMessage: terms.phrase.usernameError
  });
  passwordInput = new PasswordInputFormItem({
    type: 'password',
    key: 'password',
    label: terms.label.password,
    placeholder: terms.phrase.inputPassword,
    required: true
  });
  passwordConfirmationInput = new PasswordInputFormItem({
    type: 'password',
    key: 'passwordComfirmation',
    label: terms.label.confirmPassword,
    placeholder: terms.phrase.inputPasswordAgain,
    required: true,
    errorMessage: terms.phrase.validatePasswordError
  });

  payLoad = '';

  constructor(private formItemControlService: FormItemControlService, private userService: UserService) {
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
    console.log(user);
    this.registerUser(user);
  }

  registerUser = (newUser: User) => {
    this.userService.registerUser(newUser);
  }

  test = () => {
    this.userService.getUsers().subscribe((data) => console.log(data));
  }

}
