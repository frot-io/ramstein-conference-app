import { Component, OnInit } from '@angular/core';
import { EventsStoreService } from 'src/app/services/events-store/events-store.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.styl']
})
export class FavoritesComponent implements OnInit {

  constructor(public eventsStore: EventsStoreService) { }

  ngOnInit() {
  }

}
