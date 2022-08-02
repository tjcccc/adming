import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'adming-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnChanges {

  @Input() percent: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

}
