import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  activeLayout = new BehaviorSubject<number>(1);

  constructor() { }

  setActiveLayout(id: number): void {
    this.activeLayout.next(id);
  }
}
