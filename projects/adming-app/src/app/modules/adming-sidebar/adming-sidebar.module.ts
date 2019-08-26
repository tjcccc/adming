import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '@adming-app/modules/app-routing/app-routing.module';
import { AdmingIconsModule } from '@adming-app/modules/adming-icons/adming-icons.module';
import { SidebarComponent } from '@adming-app/components/sidebar/sidebar.component';
import { SidebarMenuComponent } from '@adming-app/components/sidebar-menu/sidebar-menu.component';
import { SidebarMenuItemComponent } from '@adming-app/components/sidebar-menu-item/sidebar-menu-item.component';

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarMenuComponent,
    SidebarMenuItemComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AdmingIconsModule
  ],
  exports: [
    SidebarComponent,
    AppRoutingModule
  ]
})
export class AdmingSidebarModule { }
