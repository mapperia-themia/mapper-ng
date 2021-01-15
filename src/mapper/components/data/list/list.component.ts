import {Component, Input, OnInit} from '@angular/core';
import {Config} from '../../../utils/config';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: any[];
  @Input() relax: boolean;
  @Input() divide: boolean;
  @Input() bullet: boolean;
  @Input() ordered: boolean;
  @Input() celled: boolean;
  @Input() size: Config['size'];

  constructor() { }

  ngOnInit(): void {
  }

}
