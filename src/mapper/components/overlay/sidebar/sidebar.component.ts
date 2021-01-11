import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Navigation} from '../../../models/navigation';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() navs: Navigation[];
  @Input() isVisible = false;
  @Input() direction: 'left' | 'right' | 'top' | 'bottom' = 'left';
  @Input() transition: 'overlay' | 'uncover' | 'scale down' | 'push' | 'slide along' | 'slide out' = 'uncover';
  @Input() dimmedContent = false;
  @Output() visibilityChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onVisibilityChange($event: boolean): void {
    this.visibilityChange.emit($event);
  }
}