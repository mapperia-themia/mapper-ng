import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ps: string[] = ['1', '2', '3', '4'];
  key: string = '';
  constructor() {
  }

  ngOnInit(): void {}
}
