import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'adming-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  @Input() percent: number;

  constructor() { }

  ngOnInit() {
  }

}
