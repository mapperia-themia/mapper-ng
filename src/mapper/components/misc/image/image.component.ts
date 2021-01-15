import {Component, Input, OnInit} from '@angular/core';
import {Config} from '../../../utils/config';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() url: string;
  @Input() name: string;
  @Input() size: Config['size'];
  @Input() bordered: boolean;
  @Input() full: boolean;
  @Input() rounded: boolean;
  @Input() circle: boolean;
  @Input() spaced: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
