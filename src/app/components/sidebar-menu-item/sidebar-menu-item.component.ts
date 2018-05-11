import { Component, Input, OnChanges } from '@angular/core';
import { NavigationNode } from '../../services/navigation/navigation.model';

const LEVEL_STYLE_PREFIX = 'level-';
const FONT_AWESOME_ICON_PREFIX = 'fas';
const ICON_DEFAULT = 'circle';
const NAVIGATION_ICON_DEFAULT = 'angle-down';

@Component({
  selector: 'app-sidebar-menu-item',
  templateUrl: './sidebar-menu-item.component.html',
  styleUrls: ['./sidebar-menu-item.component.scss']
})
export class SidebarMenuItemComponent implements OnChanges {

  @Input() node: NavigationNode;
  @Input() selectedNode: NavigationNode;
  @Input() level = 1;
  @Input() isParentExpanded = true;

  isExpanded = false;
  isSelected = false;
  cssClasses: { [index: string]: boolean };
  icon: string[];
  navIcon: string[] = [FONT_AWESOME_ICON_PREFIX, NAVIGATION_ICON_DEFAULT];
  navIconRotate: number;
  nodeChildren: NavigationNode[];

  constructor() {
  }

  ngOnChanges() {
    if (this.selectedNode) {
      console.log(this.selectedNode.label);
    } else {
      console.log('no selectedNode');
    }
    this.checkSelectedState();
    this.setIcon();
    this.setNodeChildren();
    this.setCssClasses();
    this.setNavIconRotation();
  }

  setIcon() {
    if (this.node) {
      this.icon = [FONT_AWESOME_ICON_PREFIX, this.node.icon];
      this.navIcon = [FONT_AWESOME_ICON_PREFIX, NAVIGATION_ICON_DEFAULT];
      this.navIconRotate = 0;
    }
  }

  setNodeChildren() {
    this.nodeChildren = this.node && this.node.children ? this.node.children.filter(n => !n.hidden) : [];
  }

  checkSelectedState() {
    if (this.selectedNode) {
      this.isSelected = this.node === this.selectedNode;
      this.isExpanded = this.isParentExpanded && (this.isSelected || this.isExpanded);
    } else {
      this.isSelected = false;
    }
  }

  setCssClasses() {
    this.cssClasses = {
      [LEVEL_STYLE_PREFIX + this.level]: true,
      collapsed: !this.isExpanded,
      expanded: this.isExpanded,
      selected: this.isSelected
    };
  }

  clickMenuItem() {
    this.isExpanded = !this.isExpanded;
    this.setCssClasses();
  }

  setNavIconRotation() {
    if (this.navIcon) {
      this.navIconRotate = this.isExpanded ? 180 : 0;
    }
  }

}
