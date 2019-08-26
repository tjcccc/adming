import { Component, OnInit, Input } from '@angular/core';

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
