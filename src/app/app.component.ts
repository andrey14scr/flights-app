import { Component } from '@angular/core';
import { FlightsService } from './flights/services/flights-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flights-app';
}
