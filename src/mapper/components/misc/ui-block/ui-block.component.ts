import {Component, Input, OnInit} from '@angular/core';
import {Config} from '../../../utils/config';

@Component({
  selector: 'ui-block',
  templateUrl: './ui-block.component.html',
  styleUrls: ['./ui-block.component.scss']
})
export class UiBlockComponent implements OnInit {
  @Input() active: boolean;
  @Input() size: Config['size'];

  constructor() { }

  ngOnInit(): void {
  }

}
