import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmingComponentsModule } from '@adming/modules/adming-components/adming-components.module';
import { ComponentsPageComponent } from '@adming/pages/components-page/components-page.component';

@NgModule({
  declarations: [
    ComponentsPageComponent
  ],
  imports: [
    CommonModule,
    AdmingComponentsModule
  ],
  exports: [
    ComponentsPageComponent
  ]
})
export class AdmingPagesModule { }
