import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  inputValue: string;

  @Input() type: string = 'text';
  @Input() name: string;
  @Input() label: string;
  @Input() model: string;
  @Output() modelChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  changeModelValue(value: string) {
    this.modelChange.emit(value);
  }

  ngOnInit() {
  }

}
