import { Component, Input, OnChanges } from '@angular/core';
import { NavigationNode } from '@adming-app/models/navigation.model';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas, faAngleDown as NAVIGATION_ICON_DEFAULT, IconDefinition } from '@fortawesome/free-solid-svg-icons';

const LEVEL_STYLE_PREFIX = 'level-';
const FONT_AWESOME_ICON_PREFIX = 'fas';
// const NAVIGATION_ICON_DEFAULT = 'faAngleDown';

@Component({
  selector: 'adming-sidebar-menu-item',
  templateUrl: './sidebar-menu-item.component.html'
})
export class SidebarMenuItemComponent implements OnChanges {

  @Input() node: NavigationNode;
  @Input() selectedPath: string;
  @Input() level = 1;

  isExpanded = false;
  isSelected = false;
  isChildSelected = false;
  cssClasses: { [index: string]: boolean };
  icon: IconDefinition;
  navIcon: IconDefinition = NAVIGATION_ICON_DEFAULT;
  navIconRotate: number;
  nodeChildren: NavigationNode[];
  iconLibrary: FaIconLibrary;

  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIconPacks(fas);
    faIconLibrary.addIcons(NAVIGATION_ICON_DEFAULT);
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
      this.icon = this.node.icon;
      this.navIcon = NAVIGATION_ICON_DEFAULT;
      this.navIconRotate = 0;
    }
  }

  setNodeChildren() {
    this.nodeChildren = this.node && this.node.children ? this.node.children.filter(n => !n.hidden) : [];
  }

  checkSelectedState() {
    if (this.selectedPath) {
      if (this.node.children) {
        const requestNodes = this.filterChildNodesByPath(this.node, this.selectedPath);
        this.isChildSelected = requestNodes.length > 0;
      }
      this.isSelected = this.node.link === this.selectedPath;
      this.isExpanded = this.isExpanded === false ? (this.isSelected || this.isChildSelected) : this.isExpanded;
    } else {
      this.isSelected = false;
    }
  }

  filterChildNodesByPath(node: NavigationNode, path: string): NavigationNode[] {
    let requestNodes: NavigationNode[] = [];
    if (node.children) {
      requestNodes = requestNodes.concat(node.children.filter(childNode => childNode.link === path));
      for (const childNode of node.children) {
        requestNodes = requestNodes.concat(this.filterChildNodesByPath(childNode, path));
      }
    }
    return requestNodes;
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
