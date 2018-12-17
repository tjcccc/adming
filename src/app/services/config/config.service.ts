import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { navigation } from '../../config/navigation.config';
import { terms } from '../../config/terms.config';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  termsUri = 'terms.config.json';

  getNavigation = () => {
    return from([navigation]);
  }

  getTerms = () => {
    return terms;
  }
}
