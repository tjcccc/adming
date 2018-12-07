import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NavigationNode } from '@adming/models/navigation.model';
import navigation from './navigation.config';
import terms from './terms.config';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  termsUri = 'terms.config.json';

  getNavigation = () => {
    return from<NavigationNode>(navigation);
  }

  getTerms = () => {
    return terms;
  }
}
