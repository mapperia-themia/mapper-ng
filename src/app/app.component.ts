import {Component, enableProdMode, OnInit} from '@angular/core';
import {Utils} from '../mapper/utils/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    console.log(Utils);
  }

}
