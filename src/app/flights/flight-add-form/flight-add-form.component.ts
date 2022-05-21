import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../models/flight';
import { FlightsService } from '../services/flights-service.service';

@Component({
  selector: 'app-flight-add-form',
  templateUrl: './flight-add-form.component.html',
  styleUrls: ['./flight-add-form.component.scss']
})
export class FlightAddFormComponent implements OnInit {
  model = new Flight;
  submitted = false;

  constructor(private flightsService: FlightsService,
    private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit() { 
    if (this.model.date && this.model.from && this.model.to && this.model.luggage && this.model.price && this.model.price >= 0 && this.model.luggage >= 0) {
      this.submitted = false;
      this.flightsService.addFlight(this.model);
      this.model = new Flight();
      this.router.navigate(['/']);
    }
    else {
      this.submitted = true;
    }
  }

  isValidString(str: string): boolean {
    return str === undefined || str === null || str === '';
  }

  isValidNumber(num: number): boolean {
    return num === undefined || num < 0;
  }
}
