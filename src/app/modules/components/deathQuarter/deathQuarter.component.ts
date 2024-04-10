import { Component, inject } from '@angular/core';
import { Utils } from 'src/app/utils/utils';
import { EndpointsService } from '../../services/endpoints/endpoints.service';

@Component({
  selector: 'app-death-quarter',
  templateUrl: './deathQuarter.component.html',
  styleUrls: ['../../../../../src/app/app.component.scss']
})
export class DeathQuarterComponent {

  private endpoints: EndpointsService = inject(EndpointsService);
  private utils: Utils = inject(Utils);

  elementId = "yearCalendar";

  constructor () {
  }

  ngOnInit(): void {
    this.endpoints.getGamesReleaseDate(this.elementId, "2024-01-01", "2024-01-31", "ENE", true);
    this.endpoints.getGamesReleaseDate(this.elementId, "2024-02-01", "2024-02-29", "FEB", true);
    this.endpoints.getGamesReleaseDate(this.elementId, "2024-03-01", "2024-03-30", "MAR", true);
  }
  
}
