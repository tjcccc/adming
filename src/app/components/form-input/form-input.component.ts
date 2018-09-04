import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormInput } from '@adming/components/form/form.component';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements FormInput, OnInit {

  inputValue: string;

  @Input() type: string = 'text';
  @Input() name: string;
  @Input() label: string;
  @Input() model: string;
  @Output() modelChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  changeModelValue(value: string): void {
    this.modelChange.emit(value);
  }

}
