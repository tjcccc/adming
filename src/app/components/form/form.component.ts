import { Component, OnInit } from '@angular/core';
import { TestModel } from './TestModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  private testModel = new TestModel();

  value: string = '';

  constructor() {}

  ngOnInit() {}

  getInput(event: any) {
    this.value = event.target.value;
  }

  showInput() {
    console.log(this.testModel);
  }

}
