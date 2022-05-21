import { Injectable } from '@angular/core';
import { Flight } from '../models/flight';
import { FLIGHTS } from './mock-flights-list';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  constructor() { }

  getFlights(): Flight[] {
    return FLIGHTS;
  }

  addFlight(flight: Flight) {
    flight.id = FLIGHTS[FLIGHTS.length - 1].id + 1;
    FLIGHTS.push(flight);
  }
}
