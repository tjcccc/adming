import { Component, OnInit, Input, HostListener } from '@angular/core';
import { SidebarMenu } from '../../entities/sidebar-menu';
import { CollapseNextDirective } from '../../directives/collapse-next/collapse-next.directive';

const LEVEL_STYLE_PREFIX = 'level-';
const SELECTED_STYLE = 'selected';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  @Input() menuData: SidebarMenu;
  menuStyle: string = '';
  nextLevelMenuGroupStyle: string = 'collapse';
  iconStyle: string[] = ['fas', 'angle-down'];
  isSelected: boolean = false;

  constructor() { }

  ngOnInit() {
    this.setMenuStyle(this.isSelected);
    this.setChildMenuGroupStyle(this.isSelected);
  }

  setMenuStyle(isSelected: boolean) {
    const levelStyle = this.getLevelClass(this.menuData.level);
    this.menuStyle = isSelected ? levelStyle + ' ' + SELECTED_STYLE : levelStyle;
    this.iconStyle = isSelected ? ['fas', 'angle-up'] : ['fas', 'angle-down'];
  }

  setChildMenuGroupStyle(isShown: boolean) {
    this.nextLevelMenuGroupStyle = isShown ? 'expand' : 'collapse';
  }

  getLevelClass(level: number) {
    return LEVEL_STYLE_PREFIX + level.toString();
  }

  selectMenu() {
    this.isSelected = this.isSelected === true ? false : true;
    this.setMenuStyle(this.isSelected);
    this.setChildMenuGroupStyle(this.isSelected);

  }

}
