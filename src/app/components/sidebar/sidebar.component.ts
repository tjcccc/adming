import { Component, OnInit } from '@angular/core';
import { ConfigService } from './../../services/config/config.service';
import { SidebarMenu } from './../../entities/sidebar-menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarMenus: SidebarMenu[] = [];
  fetchError;

  constructor(private configService: ConfigService) {}
  // constructor() {}

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
        name: jsonData[i]['name'],
        routeLink: jsonData[i]['routeLink'],
        nextLevel: []
      };
      if (jsonData[i]['nextLevel'].length > 0) {
        this.loadSidebarMenusDataByJson(menu.nextLevel, jsonData[i]['nextLevel']);
      }
      sidebarMenus.push(menu);
    }
  }



}
