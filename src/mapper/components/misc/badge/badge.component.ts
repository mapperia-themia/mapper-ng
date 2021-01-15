import {Component, Input, OnInit} from '@angular/core';
import {Config} from '../../../utils/config';

@Component({
  selector: 'badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  @Input() color: Config['color'];
  @Input() type: 'horizontal' | 'floating' = 'horizontal';
  @Input() circular: boolean;
  @Input() size: Config['size'];

  constructor() { }

  ngOnInit(): void {
  }

}
