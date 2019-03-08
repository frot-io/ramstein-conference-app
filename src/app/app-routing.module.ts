import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HelpComponent } from './components/help/help.component';
import { InfoComponent } from './components/info/info.component';
import { LocationComponent } from './components/location/location.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: 'map', component: MapComponent },
  { path: 'location', redirectTo: 'map' },
  { path: 'location/:locationId', component: LocationComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'help', component: HelpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
