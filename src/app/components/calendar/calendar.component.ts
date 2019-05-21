import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.styl']
})
export class CalendarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  favorite(event) {
    alert('This does not work yet (but will be working in the future :)');
  }
}
