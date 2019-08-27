import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdmingIconsModule } from '../adming-icons/adming-icons.module';
import { SidebarMenuComponent } from '../../components/sidebar-menu/sidebar-menu.component';
import { SidebarMenuItemComponent } from '../../components/sidebar-menu-item/sidebar-menu-item.component';

@NgModule({
  declarations: [
    SidebarMenuComponent,
    SidebarMenuItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdmingIconsModule
  ],
  exports: [
    SidebarMenuComponent,
    SidebarMenuItemComponent
  ]
})
export class AdmingSidebarModule { }
