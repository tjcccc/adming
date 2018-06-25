// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '@adming/modules/app-routing/app-routing.module';

// Services
import { ConfigService } from '@adming/services/config/config.service';
import { NavigationService } from '@adming/services/navigation/navigation.service';

// Components
import { AppComponent } from '@adming/app.component';
import { HeaderComponent } from '@adming/components/header/header.component';
import { SidebarComponent } from '@adming/components/sidebar/sidebar.component';
import { SidebarMenuComponent } from '@adming/components/sidebar-menu/sidebar-menu.component';
import { SidebarMenuItemComponent } from '@adming/components/sidebar-menu-item/sidebar-menu-item.component';
import { HomeComponent } from '@adming/components/home/home.component';
import { CollectionComponent } from '@adming/components/collection/collection.component';
import { FormComponent } from '@adming/components/form/form.component';

// Directives


// Load all font-awsome icon (solid style).
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    CollectionComponent,
    SidebarMenuComponent,
    SidebarMenuItemComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    ConfigService,
    NavigationService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
