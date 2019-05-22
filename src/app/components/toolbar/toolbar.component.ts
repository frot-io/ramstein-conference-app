import { SidenavService } from './../../services/sidenav/sidenav.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.styl']
})
export class ToolbarComponent {
  constructor(public sidenavService: SidenavService) {}
}
