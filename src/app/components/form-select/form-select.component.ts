import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormInput } from '@adming/components/form/form.component';

// If you uss enum for options, import your model here.
import { Sex } from '@adming/components/form/TestModel';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements FormInput, OnInit {

  @Input() name: string;
  @Input() label: string;

  // Model data with particular type.
  @Input() model: Sex;
  @Output() modelChange: EventEmitter<Sex> = new EventEmitter<Sex>();

  optionKeys = Object.keys;

  // Set enum model for options
  enumOptions = Sex;

  // Not recommend.
  // stringOptions = ['option A', 'option B', 'option C'];

  dropdownIcon = ['fas', 'caret-down'];

  constructor() { }

  ngOnInit() { }

  changeModelValue(value: Sex): void {
    this.modelChange.emit(value);
  }

}
