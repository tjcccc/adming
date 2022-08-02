import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { SidebarMenuItemComponent } from '../components/sidebar-menu-item/sidebar-menu-item.component';
import { FooterComponent } from '../components/footer/footer.component';
// import { FormItemComponent } from '../components/form-item/form-item.component';
import { AdmingTableComponent } from '../components/adming-table/adming-table.component';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SidebarMenuItemComponent,
    FooterComponent,
    // FormItemComponent,
    AdmingTableComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    SidebarMenuItemComponent,
    FooterComponent,
    // FormItemComponent,
    AdmingTableComponent,
    ProgressBarComponent
  ]
})
export class AdmingComponentsModule { }
