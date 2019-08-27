import { Component, OnInit, Input } from '@angular/core';
import { AdmingTableComponent } from 'adming';
import { User } from '@adming-app/models/user.model';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html'
})
export class CommonTableComponent extends AdmingTableComponent implements OnInit {

  @Input() tableTitle = 'Common Table';
  @Input() users: User[] = [];
  @Input() tableStyle = 'common full';

  constructor() {
    super();
  }

  ngOnInit() {
    this.tableData = this.users;
  }

}
