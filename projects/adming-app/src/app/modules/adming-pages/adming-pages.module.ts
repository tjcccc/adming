import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '@adming-app/pages/home-page/home-page.component';
import { AdmingModule } from 'adming';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    AdmingModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class AdmingPagesModule { }
