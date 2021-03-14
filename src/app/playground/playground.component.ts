import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  onExport($event: any): void {
    console.log($event);
  }
}
