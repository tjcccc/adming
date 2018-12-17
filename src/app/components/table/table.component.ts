import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { User } from '@adming/models/user.model';
import { userMock } from '@adming/mock/users.mock';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  pagetitle = 'Adming Data Table';
  tableTitle = {
    tableA: 'Table A'
  };
  data: User[] = [];

  constructor() {
    this.data = this.makeUsers(userMock);
    console.log(userMock);
    console.log(this.data);
  }

  ngOnInit() {
  }

  makeUsers = (user: User): User[] => {
    return new Array<User>(10).fill(user);
  }

  formatDate = (rawDate: Date): string => {
    return moment(rawDate).format('YYYY-MM-DD');
  }

}
