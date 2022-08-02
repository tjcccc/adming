import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
// import { FormsModule } from '@angular/forms';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdmingDirectivesModule } from './modules/adming-directives.module';
import { AdmingComponentsModule } from './modules/adming-components.module';
import { AdmingPagesModule } from './modules/adming-pages.module';
import { AdmingDemoModule } from './modules/adming-demo.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    // FontAwesomeModule,
    AdmingDirectivesModule,
    AdmingComponentsModule,
    AdmingPagesModule,
    AdmingDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
