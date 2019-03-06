import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: 'map', component: InfoComponent },
  { path: 'calendar', component: InfoComponent },
  { path: 'help', component: InfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
