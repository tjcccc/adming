import { Component, OnInit, Input } from '@angular/core';
import { TableComponent } from '@adming/components/table/table.component';
import { User } from '@adming/models/user.model';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html'
})
export class CommonTableComponent extends TableComponent implements OnInit {

  @Input() tableTitle = 'Common Table';
  @Input() users: User[] = [];

  constructor() {
    super();
  }

  ngOnInit() {
    this.tableData = this.users;
  }

}
