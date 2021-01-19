import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Layout} from './layout.enum';
import {LocalStorage} from '../../mapper/utils/local-storage';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private currentLayout = new BehaviorSubject<number>(Layout.default);

  constructor() { }

  getCurrentLayout(): BehaviorSubject<number> {
    return this.currentLayout;
  }

  setCurrentLayout(layoutId: number): void {
    this.currentLayout.next(layoutId);
    LocalStorage.saveToLocalStorage('layout', layoutId.toString());
  }


}
