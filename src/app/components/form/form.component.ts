import { Component, OnInit, EventEmitter } from '@angular/core';
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
    this.value = 'Name: ' + this.testModel.name + '\nAge: ' + this.testModel.age.toString() + '\nSex: ' + this.testModel.sex.toString();
  }

}

export interface FormInput {

  name: string;
  label: string;
  model: string;
  modelChange: EventEmitter<any>;

  changeModelValue(value: any);
}
