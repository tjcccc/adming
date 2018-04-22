import { Component, OnInit, NgModule, ElementRef } from '@angular/core';
import { ConfigService } from '../../services/config/config.service';
import { SidebarMenu } from '../../entities/sidebar-menu';
import { SidebarMenuComponent } from '../../components/sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarMenus: SidebarMenu[] = [];
  fetchError;

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.configService.getSidebarData()
      .subscribe(data => {
        this.loadSidebarMenusDataByJson(this.sidebarMenus, data);
      },
      error => {
        this.fetchError = error;
      }
    );
  }

  getNextLevelMenus(menu: SidebarMenu): SidebarMenu[] {
    return menu.nextLevel;
  }

  private loadSidebarMenusDataByJson(sidebarMenus: SidebarMenu[], jsonData: object[]) {
    for (let i = 0; i < jsonData.length; i += 1) {
      const menu: SidebarMenu = {
        id: i,
        label: jsonData[i]['label'],
        level: jsonData[i]['level'],
        icon: jsonData[i]['icon'],
        routerLink: jsonData[i]['routerLink'],
        nextLevel: []
      };
      if (jsonData[i]['nextLevel'].length > 0) {
        this.loadSidebarMenusDataByJson(menu.nextLevel, jsonData[i]['nextLevel']);
      }
      sidebarMenus.push(menu);
    }
  }

}
