import { Component, OnInit, Input } from '@angular/core';
import { AdmingTableComponent } from '../adming-table/adming-table.component';
import { User } from '../../../mock/users.mock';

@Component({
  selector: 'adming-collection-table-demo',
  templateUrl: './collection-table-demo.component.html',
  styleUrls: ['./collection-table-demo.component.scss']
})
export class CollectionTableDemoComponent extends AdmingTableComponent implements OnInit {

  @Input() users: Array<User> = [];
  @Input() tableStyle = 'collection striped full';

  label = {
    page: 'Page',
    prev: 'Prev',
    next: 'Next'
  };

  constructor() {
    super();
    this.tableTitle = 'Collection Table';
    this.entriesPerPage = 10;
    this.pageNumber = 1;
  }

  override ngOnInit(): void {
    this.loadTableData(this.users);
  }

}
