import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsCenterComponent } from './flights-center/flights-center.component';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightAddFormComponent } from './flight-add-form/flight-add-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FlightsCenterComponent,
    FlightsListComponent,
    FlightDetailsComponent,
    FlightAddFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FlightsModule { }
