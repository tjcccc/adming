import { Component, OnInit, Input, HostListener } from '@angular/core';
import { SidebarMenu } from '../../entities/sidebar-menu';
import { NgClass } from '@angular/common';

const LEVEL_STYLE_PREFIX = 'level-';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  @Input() menuData: SidebarMenu;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mousedown') onmousedown() {
  }

  getLevelClass(level: number) {
    return LEVEL_STYLE_PREFIX + level.toString();
  }

}
