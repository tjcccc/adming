import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@adming-app/components/header/header.component';
import { AdmingModule } from 'adming';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AdmingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class AdmingHeaderModule { }
