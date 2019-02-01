import { Component, OnInit } from '@angular/core';
import { User } from '@adming/models/user.model';
import { UserService } from '@adming/services/user/user.service';
import { usersMock300 } from '@adming/mock/users.mock';

@Component({
  selector: 'app-collection-table-showcase',
  templateUrl: './collection-table-showcase.component.html'
})
export class CollectionTableShowcaseComponent implements OnInit {

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
      .subscribe(users => this.users = users);
  }

}
