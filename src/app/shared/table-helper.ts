export const tableHelper = {
  getTableItemIndex: (currentLoopIndex: number, entriesPerPage: number, pageNumber: number) => {
    return currentLoopIndex + (pageNumber - 1) * entriesPerPage + 1;
  },
  getTotalPageCount: (tableData: Array<any>, entriesPerPage: number) => {
    if (tableData === undefined || entriesPerPage === 0) {
      return 0;
    }
    return Math.ceil(tableData.length / entriesPerPage);
  },
  getCurrentPageData: (tableData: Array<any>, entriesPerPage: number, pageNumber: number) => {
    if (tableData === undefined || entriesPerPage === 0) {
      return new Array();
    }

    const totalPageCount = Math.ceil(tableData.length / entriesPerPage);
    pageNumber = pageNumber < 1 ? 1 : pageNumber;
    pageNumber = pageNumber > totalPageCount ? totalPageCount : pageNumber;

    const startIndex = entriesPerPage * (pageNumber - 1);
    const endIndex = entriesPerPage * pageNumber;
    return tableData.slice(startIndex, endIndex);
  }
};
