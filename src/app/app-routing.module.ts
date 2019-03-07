import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent, MapComponent, CalendarComponent, HelpComponent } from './components';

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
