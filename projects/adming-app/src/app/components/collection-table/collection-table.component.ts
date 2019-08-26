import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { AdmingTableComponent } from '@adming-app/components/adming-table/adming-table.component';
import { terms } from '@adming-app/config/terms.config';
import { User } from '@adming-app/models/user.model';

@Component({
  selector: 'adming-collection-table',
  templateUrl: './collection-table.component.html'
})
export class CollectionTableComponent extends AdmingTableComponent implements OnInit {

  @Input() tableTitle = 'Collection Table';
  @Input() entriesPerPage = 10;
  @Input() pageNumber = 1;
  @Input() users: User[] = [];
  @Input() tableStyle = 'collection striped full';

  label = {
    page: terms.label.page,
    prev: terms.label.prev,
    next: terms.label.next
  };

  constructor() {
    super();
  }

  ngOnInit() {
    this.loadTableData(this.users);
  }
}
