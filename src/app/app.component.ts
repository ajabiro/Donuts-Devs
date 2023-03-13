import { Component } from '@angular/core';
import { Donut } from './donut';
import { DonutAPIService } from './donut-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DonutsAndDevs';
}
