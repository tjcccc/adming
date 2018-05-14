import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
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

  // Header
  appTitle: string = 'adming';

  // Sidebar
  sidebarNavigationNodes: NavigationNode[];
  currentNavigationNode: NavigationNode;
  isSidebarDataLoaded: boolean = false;

  constructor(
    private navigationService: NavigationService,
    private location: Location
  ) {}

  ngOnInit() {
    this.fetchSidebarNavigationNodes();
    this.navigationService.currentNode.subscribe(node => this.currentNavigationNode = node);
  }

  getPath() {
    return this.location.path();
  }

  private fetchSidebarNavigationNodes() {
    this.navigationService.navigationNodes.subscribe(
      nodes => {
        this.sidebarNavigationNodes = nodes;
        this.currentNavigationNode = nodes.find(node => node.link === this.getPath());
        this.isSidebarDataLoaded = true;
      },
      error => {
        this.fetchError = error;
      }
    );
  }

  // private stripSlashes(url: string) {
  //   return url.replace(/^\/+/, '').replace(/\/+(\?|#|$)/, '$1');
  // }

}
