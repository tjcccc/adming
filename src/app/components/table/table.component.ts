import { Component, OnInit, Input } from '@angular/core';
import { dataProcessing } from '@adming/shared/data-processing';
import { tableHelper } from '@adming/shared/table-helper';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  @Input() tableTitle?: string;
  @Input() tableData?: Array<any>;
  @Input() entriesPerPage?: number;
  @Input() pageNumber?: number;

  formatDate = dataProcessing.formatDate;
  getTableItemIndex = tableHelper.getTableItemIndex;
  getTotalPageCount = tableHelper.getTotalPageCount;
  getCurrentPageData = tableHelper.getCurrentPageData;

  constructor() { }

  ngOnInit() { }

  gotoPage = (pageNumber: number) => {
    this.pageNumber = pageNumber;
  }

}
