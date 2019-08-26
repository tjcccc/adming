import { Component, OnInit, Input } from '@angular/core';
import { AdmingTableComponent } from '@adming-app/components/adming-table/adming-table.component';
import { User } from '@adming-app/models/user.model';

@Component({
  selector: 'adming-common-table',
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
