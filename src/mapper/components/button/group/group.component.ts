import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'button-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  @Input() icon: boolean;
  @Input() vertical: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
