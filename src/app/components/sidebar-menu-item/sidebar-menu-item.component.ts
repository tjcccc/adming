import { Component, Input, OnChanges } from '@angular/core';
import { NavigationNode } from '@adming/services/navigation/navigation.model';

const LEVEL_STYLE_PREFIX = 'level-';
const FONT_AWESOME_ICON_PREFIX = 'fas';
const NAVIGATION_ICON_DEFAULT = 'angle-down';

@Component({
  selector: 'app-sidebar-menu-item',
  templateUrl: './sidebar-menu-item.component.html',
  styleUrls: ['./sidebar-menu-item.component.scss']
})
export class SidebarMenuItemComponent implements OnChanges {

  @Input() node: NavigationNode;
  @Input() selectedPath: string;
  @Input() level = 1;

  isExpanded = false;
  isSelected = false;
  isChildSelected = false;
  cssClasses: { [index: string]: boolean };
  icon: string[];
  navIcon: string[] = [FONT_AWESOME_ICON_PREFIX, NAVIGATION_ICON_DEFAULT];
  navIconRotate: number;
  nodeChildren: NavigationNode[];

  constructor() {
  }

  ngOnChanges() {
    this.setNodeChildren();
    this.checkSelectedState();
    this.setIcon();
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
    if (this.selectedPath) {
      if (this.node.children) {
        this.isChildSelected = this.node.children.find(childNode => childNode.link === this.selectedPath) !== null;
      }
      this.isSelected = this.node.link === this.selectedPath;
      this.isExpanded = this.isSelected || this.isChildSelected;
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
    this.setNavIconRotation();
  }

  setNavIconRotation() {
    if (this.navIcon) {
      this.navIconRotate = this.isExpanded ? 180 : 0;
    }
  }

}
