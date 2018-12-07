import { Component, OnInit, Input } from '@angular/core';
import { NavigationNode } from '@adming/models/navigation.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() nodes: NavigationNode[];
  @Input() currentPath: string;

  constructor() {}

  ngOnInit() {
  }

}
