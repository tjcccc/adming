import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SidebarMenu } from '../../entities/sidebarMenu';
// import { Observable } from 'rxjs/Observable';
// import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
// import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) {}

  sidebarConfigUrl = 'mock/sidebar.json';
  routesConfigUrl = 'mock/routes.json';

  getSidebarData() {
    return this.http.get<SidebarMenu[]>(this.sidebarConfigUrl);
  }

  getRoutesData() {
    return this.http.get(this.routesConfigUrl);
  }

}
