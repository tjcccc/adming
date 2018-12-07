// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AdmingIconsModule } from '@adming/modules/adming-icons/adming-icons.module';
import { AdmingHeaderModule } from '@adming/modules/adming-header/adming-header.module';
import { AdmingSidebarModule } from '@adming/modules/adming-sidebar/adming-sidebar.module';
import { AdmingHomeModule } from '@adming/modules/adming-home/adming-home.module';
import { AdmingFormModule } from '@adming/modules/adming-form/adming-form.module';

// Services
import { ConfigService } from '@adming/services/config/config.service';
import { NavigationService } from '@adming/services/navigation/navigation.service';

// Components
import { AppComponent } from '@adming/app.component';

import { CollectionComponent } from '@adming/components/collection/collection.component';


@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AdmingIconsModule,
    AdmingHeaderModule,
    AdmingSidebarModule,
    AdmingHomeModule,
    AdmingFormModule
  ],
  providers: [
    ConfigService,
    NavigationService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
