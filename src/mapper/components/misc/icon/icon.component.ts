import {Component, Input, OnInit} from '@angular/core';
import {Config} from '../../../utils/config';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() icon: string;
  @Input() loading: boolean;
  @Input() fitted: boolean;
  @Input() size: Config['size'];
  @Input() color: Config['color'];
  @Input() link: boolean;
  @Input() flipped: boolean;
  @Input() side: 'horizontally' | 'vertically' | 'clockwise' | 'counterclockwise';
  @Input() rotated: boolean;
  @Input() circular: boolean;
  @Input() bordered: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
