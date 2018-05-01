import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpResponse } from 'selenium-webdriver/http';
import { NavigationNode } from './navigation.model';

const CONFIG_SIDEBAR_URL = 'assets/config/sidebar.json';

@Injectable()
export class NavigationService {

  navigationNodes: Observable<NavigationNode[]>;
  currentNode: NavigationNode;
  fetchError;

  constructor(private http: HttpClient, private loaction: Location) {
    this.navigationNodes = this.fetchNavigationNodes();
  }

  private fetchNavigationNodes(): Observable<NavigationNode[]> {
    const nodes = this.http.get<NavigationNode[]>(CONFIG_SIDEBAR_URL)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
    return nodes;
  }

  setCurrentNode() {
    this.navigationNodes.subscribe(nodes => {
      this.currentNode = nodes.find(n => n.link === this.loaction.path());
    });
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
