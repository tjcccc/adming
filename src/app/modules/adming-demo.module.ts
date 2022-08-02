import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdmingComponentsModule } from './adming-components.module';
import { CommonTableDemoComponent } from '../components/common-table-demo/common-table-demo.component';
import { CollectionTableDemoComponent } from '../components/collection-table-demo/collection-table-demo.component';
import { DashboardDemoPageComponent } from '../pages/dashboard-demo-page/dashboard-demo-page.component';
import { ComponentsDemoPageComponent } from '../pages/components-demo-page/components-demo-page.component';
import { FormsDemoPageComponent } from '../pages/forms-demo-page/forms-demo-page.component';
import { TablesDemoPageComponent } from '../pages/tables-demo-page/tables-demo-page.component';

@NgModule({
  declarations: [
    DashboardDemoPageComponent,
    ComponentsDemoPageComponent,
    FormsDemoPageComponent,
    TablesDemoPageComponent,
    CommonTableDemoComponent,
    CollectionTableDemoComponent
  ],
  imports: [
    AdmingComponentsModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    DashboardDemoPageComponent,
    ComponentsDemoPageComponent,
    FormsDemoPageComponent,
    TablesDemoPageComponent,
    CommonTableDemoComponent,
    CollectionTableDemoComponent
  ]
})
export class AdmingDemoModule { }
