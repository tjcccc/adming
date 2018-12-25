import { Component, OnInit, Input } from '@angular/core';
import { TableComponent } from '@adming/components/table/table.component';

import { User } from '@adming/models/user.model';
import { usersMock300 } from '@adming/mock/users.mock';

@Component({
  selector: 'app-collection-table',
  templateUrl: './collection-table.component.html'
})
export class CollectionTableComponent extends TableComponent implements OnInit {

  @Input() pageTitle = 'Adming Data Table';
  @Input() tableTitle = 'Collection Table';
  @Input() tableData: User[] = [];
  @Input() entriesPerPage = 10;
  @Input() pageNumber = 1;

  // Data Processing Methods
  // formatDate = dataProcessing.formatDate;
  // getTableItemIndex = tableHelper.getTableItemIndex;
  // getTotalPageCount = tableHelper.getTotalPageCount;
  // getCurrentPageData = tableHelper.getCurrentPageData;

  constructor() {
    super();
  }

  ngOnInit() {
    // Mock data.
    this.tableData = usersMock300;
  }

  // gotoPage = (pageNumber: number) => {
  //   this.pageNumber = pageNumber;
  // }

}
