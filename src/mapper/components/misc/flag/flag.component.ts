import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss']
})
export class FlagComponent implements OnInit {
  @Input() countryName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
