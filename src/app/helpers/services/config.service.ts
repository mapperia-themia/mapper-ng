import {Inject, Injectable, InjectionToken} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Config} from '../types';
import {Router} from '@angular/router';
import {config} from '../../core/db/default';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config$: BehaviorSubject<Config>;
  readonly defaultConfig: Config;
  private userConfig: Config;

  constructor(
    private router: Router
  ) {
    this.defaultConfig = config;
    this.init();
  }

  private init(): void {
    if (localStorage.getItem('configChanged')) {
      this.setConfigFromLocalStorage();
    } else {
      this.config$.next(this.defaultConfig);
    }
  }


  private setConfigFromLocalStorage(): void {
    // anything
  }

  getCurrentConfig(): BehaviorSubject<Config> {
    return this.config$;
  }

  resetConfig(): void {
    this.config$.next(this.defaultConfig);
  }
}
