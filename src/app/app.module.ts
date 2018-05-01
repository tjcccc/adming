// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';

// Services
import { ConfigService } from './services/config/config.service';
import { NavigationService } from './services/navigation/navigation.service';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { SidebarMenuItemComponent } from './components/sidebar-menu-item/sidebar-menu-item.component';
import { HomeComponent } from './components/home/home.component';
import { CollectionComponent } from './components/collection/collection.component';

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
    SidebarMenuItemComponent
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
