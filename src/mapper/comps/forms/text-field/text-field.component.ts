import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {$e} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {
  @Input() id: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() control: FormControl;
  @Input() autocomplete: 'off';
  @Input() spellCheck = true;
  @Input() readOnly;
  @Input() hint: string;
  @Input() mStyle: 'regular' | 'classic' | 'title' = 'regular';


  @Output('enteredValue') change = new EventEmitter<string>();
  @Output('currentValue') input = new EventEmitter<string>();

  dynamicClasses: any;

  constructor() {
  }

  ngOnInit(): void {
    this.dynamicClasses = {
      title: this.mStyle === 'title',
      classic: this.mStyle === 'classic',
      regular: this.mStyle === 'regular',
    };
  }

  hasError(): boolean {
    if (this.control) {
      const {touched, errors, dirty} = this.control;
      return (touched && errors && dirty);
    }
  }

  getErrorText(): string {
    const {required, maxLength, minLength, pattern} = this.control.errors;
    if (required) {
      return `${this.label} is required`;
    } else if (maxLength) {
      return `Please, limit your characters to ${maxLength}.`;
    } else if (minLength) {
      return `Minimum ${minLength} characters needed.`;
    } else if (pattern) {
      return `Input does not satisfy the pattern.`;
    }
  }

  onChange($event: any): void {
    this.change.emit($event.target.value);
  }

  onInput($event: any): void {
    this.input.emit($event.target.value);
  }
}
