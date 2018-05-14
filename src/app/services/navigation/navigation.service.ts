import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpResponse } from 'selenium-webdriver/http';
import { NavigationNode } from './navigation.model';

const CONFIG_SIDEBAR_URL = 'assets/config/sidebar.json';

@Injectable()
export class NavigationService {

  navigationNodes: Observable<NavigationNode[]>;
  currentNode: Observable<NavigationNode>;
  fetchError;

  constructor(
    private http: HttpClient,
    private loaction: Location,
  ) {
    this.navigationNodes = this.fetchNavigationNodes();
    this.currentNode = this.getCurrentNode(this.navigationNodes);
  }

  private fetchNavigationNodes(): Observable<NavigationNode[]> {
    const nodes = this.http.get<NavigationNode[]>(CONFIG_SIDEBAR_URL)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
    return nodes;
  }

  private getCurrentNode(navigationNodes: Observable<NavigationNode[]>): Observable<NavigationNode> {
    const path = this.loaction.path;
    let currentNode: Observable<NavigationNode>;
    navigationNodes.pipe(
      map(nodes => {
        nodes.forEach(node => {
          currentNode = node.link === path(true) ? of(node) : null;
          console.log('current node: ' + node.link);
        });
      })
    );
    return currentNode;
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
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
