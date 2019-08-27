import { Component, OnInit, Input } from '@angular/core';
import { NavigationNode } from 'adming';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  @Input() nodes: NavigationNode[];
  @Input() currentPath: string;

  constructor() {}

  ngOnInit() {
  }

}
