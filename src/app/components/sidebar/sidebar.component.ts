import { Component, OnInit, Input } from '@angular/core';
import { NavigationNode } from '@adming/services/navigation/navigation.model';
import { LocationService } from '@adming/services/location/location.service';

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
