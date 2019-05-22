import { MatSidenav } from '@angular/material';
import { Component, ViewChild, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.styl']
})
export class SidenavComponent implements OnInit {
  @ViewChild('drawer') public sidenav: MatSidenav;

  constructor(public sidenavService: SidenavService) {}

  public ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }
}
