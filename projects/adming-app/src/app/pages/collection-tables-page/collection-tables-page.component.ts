import { Component, OnInit } from '@angular/core';
import { User } from '@adming-app/models/user.model';
import { UserService } from '@adming-app/services/user/user.service';
import { usersMock300 } from '@adming-app/mock/users.mock';

@Component({
  selector: 'app-collection-tables-page',
  templateUrl: './collection-tables-page.component.html'
})
export class CollectionTablesPageComponent implements OnInit {

  pageTitle = 'Collection Table Showcase';
  tableTitles = {
    tableA: 'Collection Table Style 1',
    tableB: 'Collection Table Style 2',
    tableC: 'Collection Table Style 3'
  };
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = usersMock300;
    // this.getUsers();
  }

  getUsers = () => {
    this.userService.getUsers()
      .subscribe((users: User[]) => this.users = users);
  }

}
