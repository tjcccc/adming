/**
 * Reference: angular.io (https://github.com/angular/angular/tree/master/aio)
 */

import { Component, OnInit, HostListener } from '@angular/core';
import { NavigationNode, LocationService } from 'adming';
import { NavigationService } from '@adming-app/services/navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Global
  currentPath: string;
  // currentNode: NavigationNode;

  // Header
  appTitle = 'Adming Showcase Application';

  // Sidebar
  sidebarNavigationNodes: NavigationNode[];

  constructor(
    private navigationService: NavigationService,
    private locationService: LocationService
  ) {}

  ngOnInit() {
    this.locationService.currentPath.subscribe(
      (path: string) => {
        if (path !== this.currentPath) {
          this.currentPath = path;
        }
      }
    );

    this.navigationService.navigationNodes.subscribe(
      (navigationNodes: NavigationNode[]) => {
        this.sidebarNavigationNodes = navigationNodes;
      }
    );

  }

  @HostListener('click', ['$event.target', '$event.button'])
  onClick(eventTarget: HTMLElement, button: number): boolean {

    // Deal with anchor clicks; climb DOM tree until anchor found (or null)
    let target: HTMLElement | null = eventTarget;
    while (target && !(target instanceof HTMLAnchorElement)) {
      target = target.parentElement;
    }
    if (target instanceof HTMLAnchorElement) {
      return this.locationService.handleAnchorClick(target, button);
    }

    // Allow the click to pass through
    return true;
  }

}
