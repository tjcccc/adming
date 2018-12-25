import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTableComponent } from '@adming/components/common-table/common-table.component';
import { CommonTableListComponent } from '@adming/components/common-table-list/common-table-list.component';

@NgModule({
  declarations: [
    CommonTableComponent,
    CommonTableListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonTableComponent,
    CommonTableListComponent
  ]
})
export class AdmingExamplesModule { }
