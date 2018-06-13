import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { LocationService } from './services/location/location.service';
import { NavigationEnd } from '@angular/router';
import { NavigationNode } from './services/navigation/navigation.model';
import { NavigationService } from './services/navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Global
  // location: Location;
  fetchError: any = null;
  currentPath: string;
  currentNode: NavigationNode;

  // Header
  appTitle: string = 'adming';

  // Sidebar
  sidebarNavigationNodes: NavigationNode[];
  currentNavigationNode: NavigationNode;
  isSidebarDataLoaded: boolean = false;

  constructor(
    private navigationService: NavigationService,
    private locationService: LocationService
  ) {}

  ngOnInit() {

    this.locationService.currentPath.subscribe(
      path => {
        if (path !== this.currentPath) {
          this.currentPath = path;
        }
      }
    );

    this.navigationService.currentNode.subscribe(
      currentNode => {
        this.currentNode = currentNode;
        console.log(this.currentNode);
      }
    );

    this.navigationService.navigationNodes.subscribe(
      navigationNodes => this.sidebarNavigationNodes = navigationNodes
    );

    this.isSidebarDataLoaded = true;
  }

  private fetchSidebarNavigationNodes() {

    // this.navigationService.navigationNodes.subscribe(
    //   nodes => {
    //     this.sidebarNavigationNodes = nodes;
    //     this.currentNavigationNode = nodes.find(node => node.link === this.getPath());
    //     this.isSidebarDataLoaded = true;
    //   },
    //   error => {
    //     this.fetchError = error;
    //   }
    // );
  }

  // private stripSlashes(url: string) {
  //   return url.replace(/^\/+/, '').replace(/\/+(\?|#|$)/, '$1');
  // }

}
