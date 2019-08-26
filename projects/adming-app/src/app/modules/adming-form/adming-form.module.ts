import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdmingIconsModule } from '@adming-app/modules/adming-icons/adming-icons.module';
import { FormItemComponent } from '@adming-app/components/form-item/form-item.component';

@NgModule({
  declarations: [
    FormItemComponent
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
    FormItemComponent
  ]
})
export class AdmingFormModule { }
