import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Config} from '../../../utils/config';

@Component({
  selector: 'tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() label: string;
  @Input() url: string;
  @Input() detail: string;
  @Input() color: Config['color'];
  @Input() icon: string;
  @Input() deletable: boolean;
  @Output() close = new EventEmitter();
  @Input() styled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(): void {
    this.close.emit();
  }
}
