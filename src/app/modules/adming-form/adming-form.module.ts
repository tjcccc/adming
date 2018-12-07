import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdmingIconsModule } from '@adming/modules/adming-icons/adming-icons.module';
import { FormComponent } from '@adming/components/form/form.component';
import { UserRegistrationFormComponent } from '@adming/components/user-registration-form/user-registration-form.component';
import { TestFormComponent } from '@adming/components/test-form/test-form.component';
import { FormItemComponent } from '@adming/components/form-item/form-item.component';

@NgModule({
  declarations: [
    FormComponent,
    UserRegistrationFormComponent,
    TestFormComponent,
    FormItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdmingIconsModule
  ]
})
export class AdmingFormModule { }
