import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HelpComponent } from './components/help/help.component';
import { InfoComponent } from './components/info/info.component';
import { LocationDetailsComponent } from './components/location-details/location-details.component';
import { LocationsComponent } from './components/locations/locations.component';
import { StartpageComponent } from './components/startpage/startpage.component';

const routes: Routes = [
  { path: '', component: StartpageComponent, pathMatch: 'full' },
  { path: 'info', component: InfoComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'locations/:locationId', component: LocationDetailsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'help', component: HelpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
