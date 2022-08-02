import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Connectable } from 'rxjs';
import { NavigationNode } from '../models/navigation-node.model';
import { dashboardDemoNode, menuLevelsDemoNode, level2DemoNode, level3DemoNode, componentsDemoNode, formsDemoNode, tablesDemoNode } from '../config/navigation.config';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  dashboardDemoNode: NavigationNode = dashboardDemoNode;
  menuLevelsDemoNode: NavigationNode = menuLevelsDemoNode;
  level2DemoNode: NavigationNode = level2DemoNode;
  level3DemoNode: NavigationNode = level3DemoNode;
  componentsDemoNode: NavigationNode = componentsDemoNode;
  formsDemoNode: NavigationNode = formsDemoNode;
  tablesDemoNode: NavigationNode = tablesDemoNode;

  constructor() { }
}
