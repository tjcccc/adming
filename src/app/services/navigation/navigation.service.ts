import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ConnectableObservable, combineLatest } from 'rxjs';
import { publishReplay, publishLast } from 'rxjs/operators';
import { NavigationNode } from './navigation.model';
import { LocationService } from '../location/location.service';

const CONFIG_NAVIGATION_URL = 'assets/config/navigation.json';

@Injectable()
export class NavigationService {

  navigationNodes: Observable<NavigationNode[]>;
  currentNode: Observable<NavigationNode>;

  constructor(
    private http: HttpClient,
    private loactionService: LocationService,
  ) {
    this.navigationNodes = this.fetchNavigationNodes();
    this.currentNode = this.getCurrentNode(this.navigationNodes);
  }

  private fetchNavigationNodes(): Observable<NavigationNode[]> {
    const nodes = this.http.get<NavigationNode[]>(CONFIG_NAVIGATION_URL)
      .pipe(publishLast()) as ConnectableObservable<NavigationNode[]>;
    nodes.connect();
    return nodes;
  }

  private getCurrentNode(navigationNodes: Observable<NavigationNode[]>): Observable<NavigationNode> {
    const currentNode = combineLatest(
      navigationNodes,
      this.loactionService.currentPath,
      (nodes, path) => {
        console.log('nodes count:' + nodes.length);
        console.log('node: ' + nodes.find(node => node.link === path));
        // return nodes.find(node => node.link === path);
        return nodes[0];
      })
      .pipe(publishReplay(1)) as ConnectableObservable<NavigationNode>;
    currentNode.connect();
    return currentNode;
  }

}
