import { EventsDetailsComponent } from './components/events-details/events-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HelpComponent } from './components/help/help.component';
import { InfoDetailsComponent } from './components/info-details/info-details.component';
import { InfoComponent } from './components/info/info.component';
import { LocationsComponent } from './components/locations/locations.component';
import { StartpageComponent } from './components/startpage/startpage.component';

const routes: Routes = [
  { path: '', component: StartpageComponent, pathMatch: 'full' },
  { path: 'info', component: InfoComponent },
  { path: 'info/:infoId', component: InfoDetailsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'events/:eventId', component: EventsDetailsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'locations/:locationId', component: LocationsComponent },
  { path: 'help', component: HelpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
