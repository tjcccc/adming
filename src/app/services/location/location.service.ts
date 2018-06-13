import { Injectable } from '@angular/core';
import { Location, PlatformLocation } from '@angular/common';
import { ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private readonly urlParser = document.createElement('a');
  private urlSubject = new ReplaySubject<string>(1);
  private swUpdateActivated = false;

  currentUrl = this.urlSubject
    .pipe(map(url => this.stripSlashes(url)));

  currentPath = this.currentUrl.pipe(
    map(url => (url.match(/[^?#]*/) || [])[0])  // strip query and hash
  );

  constructor(
    private location: Location,
    private platformLocation: PlatformLocation
  ) {
    this.urlSubject.next(location.path(true));
    this.location.subscribe(state => {
      return this.urlSubject.next(state.url || '');
    });
  }

  private stripSlashes(url: string) {
    return url.replace(/^\/+/, '').replace(/\/+(\?|#|$)/, '$1');
  }

}
