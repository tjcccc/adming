import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmingTableComponent } from '@adming/components/adming-table/adming-table.component';
import { NextRowTriggerDirective } from '@adming/directives/table/next-row-trigger.directive';

@NgModule({
  declarations: [
    AdmingTableComponent,
    NextRowTriggerDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AdmingTableComponent,
    NextRowTriggerDirective
  ]
})
export class AdmingTableModule { }
