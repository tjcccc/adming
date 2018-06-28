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

  showInput() {
    this.value = 'Name: ' + this.testModel.name + ' Age: ' + this.testModel.age + ' Sex: ' + this.testModel.sex;
  }

}
