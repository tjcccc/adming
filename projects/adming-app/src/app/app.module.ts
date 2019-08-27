// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// From Adming Library
import { AdmingIconsModule, AdmingSidebarModule, AdmingFormModule, AdmingTableModule } from 'adming';

// Modules
import { AdmingPagesModule } from '@adming-app/modules/adming-pages/adming-pages.module';
import { AdmingHeaderModule } from '@adming-app/modules/adming-header/adming-header.module';
import { AdmingExamplesModule } from '@adming-app/modules/adming-examples/adming-examples.module';

// Services
import { ConfigService } from '@adming-app/services/config/config.service';
import { NavigationService } from '@adming-app/services/navigation/navigation.service';

// Components
import { AppComponent } from '@adming-app/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AdmingIconsModule,
    AdmingSidebarModule,
    AdmingFormModule,
    AdmingTableModule,
    AdmingHeaderModule,
    AdmingPagesModule,
    AdmingExamplesModule
  ],
  providers: [
    ConfigService,
    NavigationService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
