import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from '@adming-app/modules/app-routing/app-routing.module';
// import { SidebarComponent } from '@adming-app/components/sidebar/sidebar.component';
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
    // AppRoutingModule,
    RouterModule,
    AdmingIconsModule
  ],
  exports: [
    // AppRoutingModule,
    RouterModule,
    SidebarMenuComponent,
    SidebarMenuItemComponent
  ]
})
export class AdmingSidebarModule { }
