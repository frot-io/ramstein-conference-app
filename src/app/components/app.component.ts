import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from '../services/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  constructor(private router: Router,
              private sidenavService: SidenavService) {
    this.router.events.subscribe(_ => {
      this.sidenavService.close();
    });
  }
}
