import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdmingIconsModule } from '../adming-icons/adming-icons.module';
import { FormItemComponent } from '../../components/form-item/form-item.component';
import { ForbiddenInputValidatorDirective } from '../../directives/form/forbidden-input-validator.directive';

@NgModule({
  declarations: [
    FormItemComponent,
    ForbiddenInputValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdmingIconsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormItemComponent,
    ForbiddenInputValidatorDirective
  ]
})
export class AdmingFormModule { }
