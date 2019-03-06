import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { HelpComponent } from './help/help.component';
import { InfoComponent } from './info/info.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: 'map', component: MapComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'help', component: HelpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
