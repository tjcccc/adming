import { Component, OnInit } from '@angular/core';
import { User } from '@adming/models/user.model';
import { usersMock } from '@adming/mock/users.mock';

@Component({
  selector: 'app-common-table-list',
  templateUrl: './common-table-list.component.html'
})
export class CommonTableListComponent implements OnInit {

  pageTitle = 'Common Table List';
  tableTitles = {
    tableA: 'Common Table Style 1'
  };
  users: User[] = [];

  constructor() { }

  ngOnInit() {
    this.users = usersMock;
  }

}
