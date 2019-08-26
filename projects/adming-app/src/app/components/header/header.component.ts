import { Component, OnInit, Input } from '@angular/core';

// test library
import { AdmingComponent } from 'adming';

@Component({
  selector: 'adming-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
