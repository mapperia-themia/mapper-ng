import {Component, Input, OnInit} from '@angular/core';
import {Config} from '../../../utils/config';

@Component({
  selector: 'm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() size: Config['size'];
  @Input() subHeader: boolean;
  @Input() icon: string;
  @Input() ringIcon: boolean;
  @Input() divide: boolean;
  @Input() block: boolean
  @Input() color: Config['color'];

  constructor() { }

  ngOnInit(): void {
  }

}
