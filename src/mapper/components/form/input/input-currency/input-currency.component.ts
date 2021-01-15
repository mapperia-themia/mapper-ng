import {Component, Input, OnInit} from '@angular/core';
import {BasicComponent} from '../basic/basic.component';

@Component({
  selector: 'input-currency',
  templateUrl: './input-currency.component.html',
  styleUrls: ['./input-currency.component.scss']
})
export class InputCurrencyComponent extends BasicComponent implements OnInit {
  id: number;
  @Input() symbol: string;

  ngOnInit(): void {
    this.id = Math.round(Math.random() * 1000);
  }

}
