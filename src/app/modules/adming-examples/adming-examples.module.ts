import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmingComponentsModule } from '@adming/modules/adming-components/adming-components.module';
import { AdmingFormModule } from '@adming/modules/adming-form/adming-form.module';
import { FormComponent } from '@adming/components/form/form.component';
import { UserRegistrationFormPageComponent } from '@adming/pages/user-registration-form-page/user-registration-form-page.component';
import { TestFormPageComponent } from '@adming/pages/test-form-page/test-form-page.component';
import { CommonTableComponent } from '@adming/components/common-table/common-table.component';
import { CollectionTableComponent } from '@adming/components/collection-table/collection-table.component';
import { CommonTablesPageComponent } from '@adming/pages/common-tables-page/common-tables-page.component';
import { CollectionTablesPageComponent } from '@adming/pages/collection-tables-page/collection-tables-page.component';
import { ComponentsPageComponent } from '@adming/pages/components-page/components-page.component';

@NgModule({
  declarations: [
    CommonTableComponent,
    FormComponent,
    UserRegistrationFormPageComponent,
    TestFormPageComponent,
    CollectionTableComponent,
    CommonTablesPageComponent,
    CollectionTablesPageComponent,
    ComponentsPageComponent
  ],
  imports: [
    CommonModule,
    AdmingFormModule,
    AdmingComponentsModule
  ],
  exports: [
    CommonTableComponent,
    FormComponent,
    UserRegistrationFormPageComponent,
    TestFormPageComponent,
    CollectionTableComponent,
    CommonTablesPageComponent,
    CollectionTablesPageComponent,
    ComponentsPageComponent
  ]
})
export class AdmingExamplesModule { }
