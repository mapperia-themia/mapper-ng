import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {I18n} from './i18n.enum';
import {LocalStorage} from '../../mapper/utils/local-storage';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private currentLanguage = new BehaviorSubject<number>(I18n.english);

  constructor() {
  }

  getCurrentLanguage(): BehaviorSubject<number> {
    return this.currentLanguage;
  }

  setCurrentLanguage(languageId: number): void {
    this.currentLanguage.next(languageId);
    LocalStorage.saveToLocalStorage('language', languageId.toString());
  }
}
