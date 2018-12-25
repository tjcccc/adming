import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '@adming/components/table/table.component';
import { CollectionTableComponent } from '@adming/components/collection-table/collection-table.component';
import { NextRowTriggerDirective } from '@adming/directives/table/next-row-trigger.directive';

@NgModule({
  declarations: [
    TableComponent,
    CollectionTableComponent,
    NextRowTriggerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    CollectionTableComponent,
    NextRowTriggerDirective
  ]
})
export class AdmingTableModule { }
