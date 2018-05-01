import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  @Input() public menuName;

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {}

}
