import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { dataConverter } from '@adming/shared/data-converter';

@Component({
  template: ''
})
export class AdmingTableComponent implements OnInit, OnChanges {

  @Input() tableTitle?: string;
  @Input() tableData?: Array<any>;
  @Input() entriesPerPage?: number;
  @Input() pageNumber?: number;

  totalPageCount: number;

  formatDate = dataConverter.formatDate;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.tableData || changes.entriesPerPage) {
      this.loadTableData(changes.tableData);
    }
  }

  loadTableData = (tableData: any) => {
    this.tableData = tableData;
    this.totalPageCount = this.getTotalPageCount(this.tableData, this.entriesPerPage);
  }

  getTableItemIndex = (currentLoopIndex: number, entriesPerPage: number, pageNumber: number) => {
    return currentLoopIndex + (pageNumber - 1) * entriesPerPage + 1;
  }

  getTotalPageCount = (tableData: Array<any>, entriesPerPage: number) => {
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
      return new Array();
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

  trackByFn = (index: number, item: any) => {
    if (!item) {
      return null;
    }
    return index;
  }
}
