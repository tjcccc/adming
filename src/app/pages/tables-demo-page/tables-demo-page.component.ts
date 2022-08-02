import { Component, OnInit } from '@angular/core';
import { User, usersMock, usersMock300 } from '../../../mock/users.mock';

@Component({
  selector: 'adming-tables-demo-page',
  templateUrl: './tables-demo-page.component.html',
  styleUrls: ['./tables-demo-page.component.scss']
})
export class TablesDemoPageComponent implements OnInit {

  users: User[] = usersMock;
  manyUsers: User[] = usersMock300;

  constructor() { }

  ngOnInit(): void {
  }

}
