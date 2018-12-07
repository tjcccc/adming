// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AdmingIconsModule } from '@adming/modules/adming-icons/adming-icons.module';
import { AdmingSidebarModule } from '@adming/modules/adming-sidebar/adming-sidebar.module';
import { AdmingFormModule } from '@adming/modules/adming-form/adming-form.module';

// Services
import { ConfigService } from '@adming/services/config/config.service';
import { NavigationService } from '@adming/services/navigation/navigation.service';

// Components
import { AppComponent } from '@adming/app.component';
import { HeaderComponent } from '@adming/components/header/header.component';
import { HomeComponent } from '@adming/components/home/home.component';
import { CollectionComponent } from '@adming/components/collection/collection.component';

// Directives


// Load all font-awsome icon (solid style).
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';

// library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    // FontAwesomeModule,
    AdmingIconsModule,
    AdmingSidebarModule,
    AdmingFormModule
  ],
  providers: [
    ConfigService,
    NavigationService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
