import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable, empty, merge, fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class ConnectionInternetStateProvider {
  private connectionMonitor: Observable<boolean>;

  constructor(@Inject(PLATFORM_ID) platform) {
    if (isPlatformBrowser(platform)) {
      const offline$ = fromEvent(window, 'offline').pipe(mapTo(false));
      const online$ = fromEvent(window, 'online').pipe(mapTo(true));
      this.connectionMonitor = merge(
        offline$, online$
        );
      } else {
        this.connectionMonitor = empty();
      }
    }

    monitor(): Observable<boolean> {
      return this.connectionMonitor;
    }

}
