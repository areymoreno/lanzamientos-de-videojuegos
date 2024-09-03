import { Component, inject } from '@angular/core';
import { Utils } from 'src/app/utils/utils';
import { EndpointsService } from '../../services/endpoints/endpoints.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../../../src/app/app.component.scss']
})
export class HomeComponent {

  private endpoints: EndpointsService = inject(EndpointsService);
  private utils: Utils = inject(Utils);

  elementId = "yearCalendar";
  elementTBA = "yearTBA";
  elementQuarters = "yearQuarters";
  
  constructor () {
  }

  ngOnInit(): void {

    let dateNOW = this.utils.formatDateNow();
    //let dateNOW = "2024-01-01";

    this.automaticCalendar(this.elementId, "2024-01-01", "2024-01-31", dateNOW, "ENE");
    this.automaticCalendar(this.elementId, "2024-02-01", "2024-02-29", dateNOW, "FEB");
    this.automaticCalendar(this.elementId, "2024-03-01", "2024-03-31", dateNOW, "MAR");
    this.automaticCalendar(this.elementId, "2024-04-01", "2024-04-30", dateNOW, "ABR");
    this.automaticCalendar(this.elementId, "2024-05-01", "2024-05-31", dateNOW, "MAY");
    this.automaticCalendar(this.elementId, "2024-06-01", "2024-06-29", dateNOW, "JUN");
    this.automaticCalendar(this.elementId, "2024-07-01", "2024-07-31", dateNOW, "JUL");
    this.automaticCalendar(this.elementId, "2024-08-01", "2024-08-31", dateNOW, "AGO");
    this.automaticCalendar(this.elementId, "2024-09-01", "2024-09-29", dateNOW, "SEP");
    this.automaticCalendar(this.elementId, "2024-10-01", "2024-10-31", dateNOW, "OCT");
    this.automaticCalendar(this.elementId, "2024-11-01", "2024-11-30", dateNOW, "NOV");
    this.automaticCalendar(this.elementId, "2024-12-01", "2024-12-30", dateNOW, "DIC");

    //this.automaticCalendar(this.elementQuarters, "2024-03-31", "2024-03-31", dateNOW, "Q2TBA");
    //this.automaticCalendar(this.elementQuarters, "2024-06-30", "2024-06-30", dateNOW, "Q2TBA");
    //this.automaticCalendar(this.elementQuarters, "2024-09-30", "2024-09-30", dateNOW, "Q3TBA");
    this.automaticCalendar(this.elementQuarters, "2024-12-31", "2024-12-31", dateNOW, "Q4TBA");

    this.automaticCalendar(this.elementTBA, "2025-01-01", "2025-01-31", dateNOW, "ENETBA");
    this.automaticCalendar(this.elementTBA, "2025-02-01", "2025-02-28", dateNOW, "FEBTBA");
    this.automaticCalendar(this.elementTBA, "2025-03-01", "2025-03-31", dateNOW, "MARTBA");
    this.automaticCalendar(this.elementTBA, "2025-04-01", "2025-04-30", dateNOW, "ABRTBA");
    this.automaticCalendar(this.elementTBA, "2025-05-01", "2025-05-31", dateNOW, "MAYTBA");
    this.automaticCalendar(this.elementTBA, "2025-06-01", "2025-06-30", dateNOW, "JUNTBA");
    this.automaticCalendar(this.elementTBA, "2025-07-01", "2025-07-31", dateNOW, "JULTBA");
    this.automaticCalendar(this.elementTBA, "2025-08-01", "2025-08-31", dateNOW, "AGOTBA");
    this.automaticCalendar(this.elementTBA, "2025-09-01", "2025-09-30", dateNOW, "SEPTBA");
    this.automaticCalendar(this.elementTBA, "2025-10-01", "2025-10-31", dateNOW, "OCTTBA");
    this.automaticCalendar(this.elementTBA, "2025-11-01", "2025-11-30", dateNOW, "NOVTBA");
    this.automaticCalendar(this.elementTBA, "2025-12-01", "2025-12-31", dateNOW, "DICTBA");
  }

  automaticCalendar(elementalId: string, initialDate: string, finishDate: string, dateNOW: string, appendTable: string) {

    let unixInitial = this.utils.realDateToUnixTimeStamp(initialDate);
    let unixFinish = this.utils.realDateToUnixTimeStamp(finishDate) 
    let unixNOW = this.utils.realDateToUnixTimeStamp(dateNOW);

    if((unixNOW >= unixInitial) && (unixNOW <= unixFinish)) {
      this.endpoints.getGamesReleaseDate(elementalId, dateNOW, finishDate, appendTable);
    } else if (unixNOW < unixInitial) {
      this.endpoints.getGamesReleaseDate(elementalId, initialDate, finishDate, appendTable);
    }
  }

}
