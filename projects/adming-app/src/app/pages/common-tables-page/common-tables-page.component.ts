import { Component, OnInit } from '@angular/core';
import { User } from '@adming-app/models/user.model';
import { usersMock } from '@adming-app/mock/users.mock';

@Component({
  selector: 'adming-common-tables-page',
  templateUrl: './common-tables-page.component.html'
})
export class CommonTablesPageComponent implements OnInit {

  pageTitle = 'Common Table List';
  tableTitles = {
    tableA: 'Common Table Style 1',
    tableB: 'Common Table Style 2',
    tableC: 'Common Table Style 3'
  };
  users: User[] = [];

  constructor() { }

  ngOnInit() {
    this.users = usersMock;
  }

}
