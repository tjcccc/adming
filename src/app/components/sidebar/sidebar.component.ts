import { Component, OnInit, Input } from '@angular/core';
import { NavigationNode } from '@adming/models/navigation.model';

@Component({
  selector: 'adming-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  @Input() nodes: NavigationNode[];
  @Input() currentPath: string;

  constructor() {}

  ngOnInit() {
  }

}
