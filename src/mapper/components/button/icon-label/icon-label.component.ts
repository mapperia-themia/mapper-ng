import {Component, Input, OnInit} from '@angular/core';
import {Config} from '../../../utils/config';

@Component({
  selector: 'button-icon-label',
  templateUrl: './icon-label.component.html',
  styleUrls: ['./icon-label.component.scss']
})
export class IconLabelComponent implements OnInit {
  @Input() icon: string;
  @Input() iconLabel: string;
  @Input() label: string;
  @Input() color: Config['color'];
  @Input() pointing: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
