import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';


@Injectable()
export class BrowserPushNotificationProvider {

  private permission: NotificationPermission;

  constructor() {
    this.requestPermission();
  }

  public isSupported(): boolean {
    return 'Notification' in window;
  }

  requestPermission(): void {
    const self = this;
    if ('Notification' in window) {
      Notification.requestPermission(status => {return self.permission = status});
    }else{
      self.permission = 'denied';
    }
  }

  create(title: string, options ? : NotificationOptions): any {
    let self = this;
    return new Observable(function(obs) {
      if (!('Notification' in window)) {
        obs.complete();
      }

      if (self.permission !== 'granted') {
        obs.complete();
      }

      let _notify = new Notification(title, options);

      _notify.onshow = function(e) {
        return obs.next({
          notification: _notify,
          event: e
        });
      };
      _notify.onclick = function(e) {
        return obs.next({
          notification: _notify,
          event: e
        });
      };
      _notify.onerror = function(e) {
        return obs.error({
          notification: _notify,
          event: e
        });
      };
      _notify.onclose = function() {
        return obs.complete();
      };
    });
  }

  generateNotification(source: Array <any>): void {
    let self = this;
    source.forEach((item) => {
      let options = {
        body: item.alertContent,
        icon: "../assets/imgs/logo.png"
      };

      self.create(item.title, options).subscribe();
    })
  }


}
