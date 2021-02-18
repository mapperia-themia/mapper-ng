import {Component, OnInit} from '@angular/core';
import {I18nService} from './helpers/services/i18n.service';
import {I18n} from './helpers/enums/i18n.enum';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  language: any;

  constructor(
    private i18n: I18nService
  ) {
  }

  ngOnInit(): void {
    this.i18n.language.subscribe(lang => this.language = lang);
    this.i18n.setCurrentLanguage(I18n.bn);
  }
}
