import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonTableComponent } from '@adming/components/common-table/common-table.component';
import { CollectionTableComponent } from '@adming/components/collection-table/collection-table.component';
import { CommonTableListComponent } from '@adming/components/common-table-list/common-table-list.component';
import { CollectionTableShowcaseComponent } from '@adming/components/collection-table-showcase/collection-table-showcase.component';

@NgModule({
  declarations: [
    CommonTableComponent,
    CollectionTableComponent,
    CommonTableListComponent,
    CollectionTableShowcaseComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonTableComponent,
    CollectionTableComponent,
    CommonTableListComponent,
    CollectionTableShowcaseComponent
  ]
})
export class AdmingExamplesModule { }
