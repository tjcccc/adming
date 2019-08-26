import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmingComponentsModule } from '@adming-app/modules/adming-components/adming-components.module';
import { AdmingFormModule } from '@adming-app/modules/adming-form/adming-form.module';
import { FormComponent } from '@adming-app/components/form/form.component';
import { UserRegistrationFormPageComponent } from '@adming-app/pages/user-registration-form-page/user-registration-form-page.component';
import { TestFormPageComponent } from '@adming-app/pages/test-form-page/test-form-page.component';
import { CommonTableComponent } from '@adming-app/components/common-table/common-table.component';
import { CollectionTableComponent } from '@adming-app/components/collection-table/collection-table.component';
import { CommonTablesPageComponent } from '@adming-app/pages/common-tables-page/common-tables-page.component';
import { CollectionTablesPageComponent } from '@adming-app/pages/collection-tables-page/collection-tables-page.component';
import { ComponentsPageComponent } from '@adming-app/pages/components-page/components-page.component';

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
