import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { dataConverter } from '../../utilities/data-converter';

@Component({
  // selector: 'adming-adming-table',
  // templateUrl: './adming-table.component.html',
  // styleUrls: ['./adming-table.component.scss']
  template: ''
})
export class AdmingTableComponent implements OnInit, OnChanges {

  @Input() tableTitle?: string;
  @Input() tableData?: Array<any>;
  @Input() entriesPerPage: number = 1;
  @Input() pageNumber: number = 0;

  totalPageCount: number = 0;
  navPageNumber = 1;

  formatDate = dataConverter.formatDate;
  makeArrayForLoop = dataConverter.makeArrayForLoop;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tableData'] || changes['entriesPerPage']) {
      this.loadTableData(changes['tableData']);
    }
  }

  loadTableData = (tableData: any) => {
    this.tableData = tableData;
    this.totalPageCount = this.getTotalPageCount(this.tableData, this.entriesPerPage ?? 0);
  }

  getTableItemIndex = (currentLoopIndex: number, entriesPerPage: number, pageNumber: number) => {
    return currentLoopIndex + (pageNumber - 1) * entriesPerPage + 1;
  }

  getTotalPageCount = (tableData: Array<any> | undefined, entriesPerPage: number) => {
    if (tableData === null || tableData === undefined || entriesPerPage === 0) {
      return 1;
    }
    return Math.ceil(tableData.length / entriesPerPage) < 1 ? 1 : Math.ceil(tableData.length / entriesPerPage);
  }

  fixPageNumber = (pageNumber: number, totalPageCount: number) => {
    let fixedPageNumber = pageNumber < 1 ? 1 : pageNumber;
    fixedPageNumber = pageNumber > totalPageCount ? totalPageCount : pageNumber;
    return fixedPageNumber;
  }

  getCurrentPageData = (tableData: Array<any>, entriesPerPage: number, pageNumber: number) => {
    if (tableData === null || tableData === undefined || entriesPerPage === 0) {
      return [];
    }

    this.loadTableData(tableData);
    pageNumber = pageNumber < 1 ? 1 : pageNumber;
    pageNumber = pageNumber > this.totalPageCount ? this.totalPageCount : pageNumber;

    // Page Number = Index + 1
    const startIndex = entriesPerPage * (pageNumber - 1);
    const endIndex = entriesPerPage * pageNumber;
    return tableData.slice(startIndex, endIndex);
  }

  gotoPage = (pageNumber: number) => {
    // console.log(pageNumber, this.totalPageCount);
    this.pageNumber = this.fixPageNumber(pageNumber, this.totalPageCount);
  }

  isInNavRange = (index: number, pageNumber: number, range: number) => {
    // For first 9.
    if (pageNumber < (range / 2)) {
      return (index + 1) < range;
    }

    // For last 9.
    if ((this.totalPageCount - pageNumber) < (range / 2)) {
      return Math.abs(index + 1 - pageNumber) < (range - (this.totalPageCount - pageNumber) - 1);
    }

    // Others.
    return Math.abs(index + 1 - pageNumber) < (range / 2);
  }

  trackByFn = (index: number, item: any) => {
    if (!item) {
      return null;
    }
    return index;
  }
}
