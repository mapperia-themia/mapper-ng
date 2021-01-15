import {Component, Input, OnInit} from '@angular/core';
import {Config} from '../../../../utils/config';

@Component({
  selector: 'basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Input() error: boolean;
  @Input() label: string;
  @Input() full: boolean;
  @Input() size: Config['size'];
  constructor() { }

  ngOnInit(): void {
  }

}
