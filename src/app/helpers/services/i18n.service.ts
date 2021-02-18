import {Injectable, OnInit} from '@angular/core';
import {I18n} from '../enums/i18n.enum';
import {BehaviorSubject} from 'rxjs';
import {bn, en} from '../i18n';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  language = new BehaviorSubject<any>(en);
  currentLanguage = new BehaviorSubject<number>(I18n.en);

  constructor() {
    this.getLanguage();
  }

  getLanguage(): any {
    this.currentLanguage.subscribe((language) => {
      switch (language) {
        case 0:
          this.language.next(en);
          break;

        case 1:
          this.language.next(bn);
          break;
      }
    });
  }

  getCurrentLanguage(): BehaviorSubject<number> {
    return this.currentLanguage;
  }

  setCurrentLanguage(language: number): void {
    this.currentLanguage.next(language);
    localStorage.setItem('i18n', language.toString());
  }

}
