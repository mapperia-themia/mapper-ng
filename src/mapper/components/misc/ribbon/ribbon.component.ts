import {Component, Input, OnInit} from '@angular/core';
import {Config} from '../../../utils/config';

@Component({
  selector: 'ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss']
})
export class RibbonComponent implements OnInit {
  @Input() color: Config['color'];

  constructor() { }

  ngOnInit(): void {
  }

}
