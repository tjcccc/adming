import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config/config.Service';
import { SidebarMenu } from '../../entities/sidebarMenu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  siderbarMenus: SidebarMenu[];

  constructor(private configService: ConfigService) { }

  ngOnInit() {
  }

  getData() {

    this.configService.getSidebarData().subscribe(jsonArrayData => this.siderbarMenus = jsonArrayData);

  }



}
