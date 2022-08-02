import { Injectable } from '@angular/core';
import { appConfig } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  getAppConfig = () => {
    return appConfig;
  };
}
