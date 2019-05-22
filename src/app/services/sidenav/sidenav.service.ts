import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { MatSidenav, MatDrawerToggleResult } from '@angular/material';

@Injectable({providedIn: 'root'})
export class SidenavService {
  private sidenav: MatSidenav;

  setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open(): Observable<MatDrawerToggleResult> {
    return from(this.sidenav.open());
  }

  public close(): Observable<MatDrawerToggleResult> {
    return from(this.sidenav.close());
  }

  public toggle(isOpen?: boolean): Observable<MatDrawerToggleResult> {
    return from(this.sidenav.toggle(isOpen));
  }
}
