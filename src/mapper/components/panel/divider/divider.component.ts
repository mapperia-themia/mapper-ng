import {Component, Input, OnInit} from '@angular/core';
import {Config} from '../../../utils/config';

@Component({
  selector: 'divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {
  @Input() layout: Config['layout'];
  @Input() hidden: boolean;
  @Input() section: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
