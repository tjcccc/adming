import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenInputValidatorDirective } from '../directives/forbidden-input-validator.directive';
import { NextRowTriggerDirective } from '../directives/next-row-trigger.directive';

@NgModule({
  declarations: [
    ForbiddenInputValidatorDirective,
    NextRowTriggerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ForbiddenInputValidatorDirective,
    NextRowTriggerDirective
  ]
})
export class AdmingDirectivesModule { }
