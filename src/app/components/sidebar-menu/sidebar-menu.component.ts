import { Component, OnInit, Input} from '@angular/core';
import { NavigationNode } from '../../services/navigation/navigation.model';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  @Input() nodes: NavigationNode[];
  @Input() currentNode: NavigationNode;

  get filteredNodes() {
    return this.nodes ? this.nodes.filter(n => !n.hidden) : [];
  }

  // get selectedNode() {
  //   return this.currentNode;
  // }

  constructor() {}

  ngOnInit() {
    if (this.currentNode) {
      console.log(this.currentNode.label);
    }
  }

}
