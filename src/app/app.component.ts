import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {
    AOS.init();
  }

}
