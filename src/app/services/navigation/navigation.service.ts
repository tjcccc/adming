/**
 * Reference: angular.io (https://github.com/angular/angular/tree/master/aio)
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ConnectableObservable } from 'rxjs';
import { publishLast } from 'rxjs/operators';
import { ConfigService } from '@adming/services/config/config.service';
import { NavigationNode } from '@adming/models/navigation.model';
import { navigation } from '@adming/config/navigation.config';

const CONFIG_NAVIGATION_URL = 'assets/config/navigation.json';

@Injectable()
export class NavigationService {

  navigationNodes: Observable<NavigationNode[]>;
  currentNode: Observable<NavigationNode>;

  constructor(private configService: ConfigService, private http: HttpClient) {
    this.navigationNodes = this.fetchNavigationNodes();
  }

  private fetchNavigationNodes(): Observable<NavigationNode[]> {
    return this.configService.getNavigation();
    // const nodes = this.http.get<NavigationNode>(CONFIG_NAVIGATION_URL)
    //   .pipe(publishLast()) as ConnectableObservable<NavigationNode[]>;
    // nodes.connect();
    // return nodes;
  }

  // TODO: Get real current node.
  // private getCurrentNode(navigationNodes: Observable<NavigationNode[]>): Observable<NavigationNode> {
  //   const currentNode = combineLatest(
  //     navigationNodes,
  //     this.loactionService.currentPath,
  //     (nodes, path) => {
  //       return nodes[0];
  //     })
  //     .pipe(publishReplay(1)) as ConnectableObservable<NavigationNode>;
  //   currentNode.connect();
  //   return currentNode;
  // }

}
