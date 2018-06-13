import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ConnectableObservable, combineLatest } from 'rxjs';
import { map, publishReplay, publishLast } from 'rxjs/operators';
import { NavigationNode } from './navigation.model';
import { LocationService } from '../location/location.service';

const CONFIG_SIDEBAR_URL = 'assets/config/routes.json';

@Injectable()
export class NavigationService {

  navigationNodes: Observable<NavigationNode[]>;
  currentNode: Observable<NavigationNode>;
  fetchError;

  constructor(
    private http: HttpClient,
    private loaction: LocationService,
  ) {
    this.navigationNodes = this.fetchNavigationNodes();
    this.currentNode = this.getCurrentNode(this.navigationNodes);
  }

  private fetchNavigationNodes(): Observable<NavigationNode[]> {
    const nodes = this.http.get<NavigationNode[]>(CONFIG_SIDEBAR_URL)
      .pipe(publishLast());
    console.log(nodes.source);
    return nodes;
  }

  private getCurrentNode(navigationNodes: Observable<NavigationNode[]>): Observable<NavigationNode> {
    const currentNode = combineLatest(
      navigationNodes,
      this.loaction.currentPath,
      (nodes, path) => {
        console.log(nodes);
        console.log(path);
      })
      .pipe(publishReplay(1)) as ConnectableObservable<NavigationNode>;
    // (currentNode as ConnectableObservable<NavigationNode>).connect();
    return currentNode;
  }

}
