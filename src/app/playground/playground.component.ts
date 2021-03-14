import { Component, OnInit } from '@angular/core';
import {IconController} from '../addons/pdf-viewer/types/IconController';

@Component({
  selector: 'playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  extraBtns: IconController[] = [];

  constructor() { }

  ngOnInit(): void {
    this.extraBtns = [
      {
        id: 4,
        icon: 'https://s2.svgbox.net/files.svg?ic=drone',
        name: 'drone'
      }
    ];
  }

  onExport($event: any): void {
    console.log($event);
  }
}
