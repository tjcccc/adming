import { Component, OnInit, Input } from '@angular/core';
import { NavigationNode } from '../../models/navigation-node.model';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'adming-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // Navigation nodes for sidebar menu.
  dashboardDemoNode: NavigationNode;
  menuLevelsDemoNode: NavigationNode;
  level2DemoNode: NavigationNode;
  level3DemoNode: NavigationNode;
  componentsDemoNode: NavigationNode;
  formsDemoNode: NavigationNode;
  tablesDemoNode: NavigationNode;

  constructor(private navigationService: NavigationService) {
    this.dashboardDemoNode = navigationService.dashboardDemoNode;
    this.menuLevelsDemoNode = navigationService.menuLevelsDemoNode;
    this.level2DemoNode = navigationService.level2DemoNode;
    this.level3DemoNode = navigationService.level3DemoNode;
    this.componentsDemoNode = navigationService.componentsDemoNode;
    this.formsDemoNode = navigationService.formsDemoNode;
    this.tablesDemoNode = navigationService.tablesDemoNode;
  }

  ngOnInit(): void {
  }

}
