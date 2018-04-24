import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarMenu } from '../../entities/sidebar-menu';

const MENU_ID_PREFIX = 'menu-';
const LEVEL_STYLE_PREFIX = 'level-';
const SELECTED_STYLE = 'selected';
const ACTIVED_STYLE = 'active';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  @Input() menuData: SidebarMenu;
  menuId: string = '';
  menuStyle: string[] = [];
  nextLevelMenuGroupStyle: string = 'collapse';
  menuIconStyle: string[] = [];
  navIconStyle: string[] = [];
  isSelected: boolean = false;
  isActive: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.setMenuId();
    this.setMenuIcon();
    this.setNavIcon(this.isSelected);
    this.setMenuStyle(this.isSelected);
    this.setChildMenuGroupStyle(this.isSelected);
  }

  getLevelClass(level: number): string {
    return LEVEL_STYLE_PREFIX + level.toString();
  }

  setMenuId() {
    this.menuId = MENU_ID_PREFIX + this.menuData.routerLink;
  }

  setMenuStyle(isActive: boolean) {
    this.menuStyle = isActive ? [this.getLevelClass(this.menuData.level), 'active'] : [this.getLevelClass(this.menuData.level)];
  }

  setMenuIcon() {
    this.menuIconStyle = ['fas', this.menuData.icon];
  }

  setNavIcon(isNextLevelExpanded: boolean) {
    if (this.menuData.nextLevel.length === 0) {
      this.navIconStyle = [];
    } else {
      this.navIconStyle = isNextLevelExpanded ? ['fas', 'angle-up'] : ['fas', 'angle-down'];
    }
  }

  setChildMenuGroupStyle(isShown: boolean) {
    if (this.menuData.nextLevel.length !== 0) {
      this.nextLevelMenuGroupStyle = isShown ? 'expand' : 'collapse';
    }
  }

  setMenuSelected(isSelected: boolean) {
    this.setChildMenuGroupStyle(isSelected);
  }

  setMenuActive(isActive: boolean) {
    this.isActive = isActive;
    this.setMenuStyle(this.isActive);
  }

  selectMenu() {

    this.isSelected = !this.isSelected;
    this.setNavIcon(this.isSelected);
    this.setChildMenuGroupStyle(this.isSelected);

    if (this.menuData.routerLink !== '') {
      this.navigateRoute();
      this.setMenuActive(this.isSelected);
    }

  }

  navigateRoute() {
    this.router.navigate([this.menuData.routerLink]);
  }

}
