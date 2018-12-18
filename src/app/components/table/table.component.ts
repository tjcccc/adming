import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { User } from '@adming/models/user.model';
import { usersMock } from '@adming/mock/users.mock';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  pagetitle = 'Adming Data Table';
  tableTitle = {
    tableA: 'Table Style A',
    tableB: 'Table Style B',
    tableC: 'Table Style C'
  };
  data: User[] = [];

  constructor() {
    // Fake data.
    this.data = usersMock;
  }

  ngOnInit() {
  }

  formatDate = (rawDate: Date): string => {
    return moment(rawDate).format('YYYY-MM-DD');
  }

}
