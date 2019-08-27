import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmingTableComponent } from '../../components/adming-table/adming-table.component';
import { NextRowTriggerDirective } from '../../directives/table/next-row-trigger.directive';

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
