import { Component, OnInit, Input } from '@angular/core';
import { NavigationNode } from '@adming-app/models/navigation.model';

@Component({
  selector: 'adming-sidebar-menu',
  templateUrl: './sidebar-menu.component.html'
})
export class SidebarMenuComponent implements OnInit {

  @Input() nodes: NavigationNode[];
  @Input() currentPath: string;

  get filteredNodes() {
    return this.nodes ? this.nodes.filter(n => !n.hidden) : [];
  }

  constructor() {}

  ngOnInit() {}

}
