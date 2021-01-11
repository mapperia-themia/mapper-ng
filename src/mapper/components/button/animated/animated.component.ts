import {Component, Input, OnInit} from '@angular/core';
import {Config} from '../../../utils/config';

@Component({
  selector: 'button-animated',
  templateUrl: './animated.component.html',
  styleUrls: ['./animated.component.scss']
})
export class AnimatedComponent implements OnInit {
  @Input() color: Config['color'];

  constructor() { }

  ngOnInit(): void {
  }

}
