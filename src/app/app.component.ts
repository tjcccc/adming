import { Component, OnInit, HostListener } from '@angular/core';
import { ConfigService } from './services/config.service';
import { AppConfig } from './models/app-config.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appConfig?: AppConfig;

  constructor(private configService: ConfigService) {
    this.appConfig = configService.getAppConfig();
  }


}
