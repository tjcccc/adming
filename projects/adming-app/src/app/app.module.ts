// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AdmingIconsModule } from '@adming-app/modules/adming-icons/adming-icons.module';
import { AdmingPagesModule } from '@adming-app/modules/adming-pages/adming-pages.module';
import { AdmingHeaderModule } from '@adming-app/modules/adming-header/adming-header.module';
import { AdmingSidebarModule } from '@adming-app/modules/adming-sidebar/adming-sidebar.module';
import { AdmingFormModule } from '@adming-app/modules/adming-form/adming-form.module';
import { AdmingTableModule } from '@adming-app/modules/adming-table/adming-table.module';
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
    AdmingHeaderModule,
    AdmingSidebarModule,
    AdmingFormModule,
    AdmingTableModule,
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
