import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightAddFormComponent } from './flights/flight-add-form/flight-add-form.component';
import { FlightDetailsComponent } from './flights/flight-details/flight-details.component';
import { FlightsCenterComponent } from './flights/flights-center/flights-center.component';
import { FlightsListComponent } from './flights/flights-list/flights-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/center', pathMatch: 'full' },
  { path: 'list', component: FlightsListComponent },
  { path: 'center', component: FlightsCenterComponent },
  { path: 'details', component: FlightDetailsComponent },
  { path: 'add', component: FlightAddFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
