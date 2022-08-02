import { Component, Input, OnInit } from '@angular/core';
import { AdmingTableComponent } from '../adming-table/adming-table.component';
import { User } from '../../../mock/users.mock';

@Component({
  selector: 'adming-common-table-demo',
  templateUrl: './common-table-demo.component.html',
  styleUrls: ['./common-table-demo.component.scss']
})
export class CommonTableDemoComponent extends AdmingTableComponent implements OnInit {

  // Custom data
  @Input() users: User[] = [];

  @Input() tableStyle = 'common full';

  constructor() {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.tableData = this.users;
  }

}
