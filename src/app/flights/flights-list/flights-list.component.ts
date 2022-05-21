import { Component, OnInit } from '@angular/core';
import { Flight } from '../models/flight';
import { FlightsService } from '../services/flights-service.service';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.scss']
})
export class FlightsListComponent implements OnInit {
  selectedFlight: Flight;
  flights: Flight[] = [];

  constructor(private flightsService: FlightsService) { }

  ngOnInit() {
    this.flights = this.flightsService.getFlights();
  }

  onFlightSelect(event: any, flight: Flight) {
    if (this.selectedFlight === flight) {
      this.selectedFlight = new Flight();
    }
    else {
      this.selectedFlight = flight; 
    }
  }
}
