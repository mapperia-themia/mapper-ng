import {Component, Input, OnInit} from '@angular/core';
import {Config} from '../../../utils/config';

@Component({
  selector: 'button-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  @Input() color: Config['color'];
  @Input() outlined: boolean;
  @Input() disabled: boolean;
  @Input() size: Config['size'];
  @Input() compact = true;
  @Input() rounded: boolean;
  @Input() full: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
