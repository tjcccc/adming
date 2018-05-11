import { Component, OnInit, Input, NgModule, ElementRef } from '@angular/core';
import { ConfigService } from '../../services/config/config.service';
import { SidebarMenu } from '../../entities/sidebar-menu';
import { SidebarMenuComponent } from '../../components/sidebar-menu/sidebar-menu.component';
import { NavigationNode } from '../../services/navigation/navigation.model';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() nodes: NavigationNode[];
  @Input() currentNode: NavigationNode;

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    if (this.currentNode) {
      console.log(this.currentNode.label);
    }
  }

}
