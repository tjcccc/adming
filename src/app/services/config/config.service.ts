import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { SidebarMenu } from '../../entities/sidebar-menu';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { HttpResponse } from 'selenium-webdriver/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) {}

  sidebarConfigUrl = 'assets/config/sidebar.json';
  routesConfigUrl = 'assets/config/routes.json';

  getSidebarData() {
    return this.http.get<object[]>(this.sidebarConfigUrl, { responseType: 'json' })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  getRoutesData() {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }

}

