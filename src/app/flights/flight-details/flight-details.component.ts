import { Component, Input, OnInit } from '@angular/core';
import { Flight } from '../models/flight';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {
  @Input() flight: Flight = new Flight();

  constructor() { }

  ngOnInit(): void {
  }

}
