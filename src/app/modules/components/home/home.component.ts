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
  
  constructor () {
  }

  ngOnInit(): void {

    let dateNOW = this.utils.formatDateNow();
    //let dateNOW = "2024-01-01";

    this.automaticCalendar("2024-01-01", "2024-01-31", dateNOW, "ENE");
    this.automaticCalendar("2024-02-01", "2024-02-29", dateNOW, "FEB");
    this.automaticCalendar("2024-03-01", "2024-03-31", dateNOW, "MAR");
    this.automaticCalendar("2024-04-01", "2024-04-30", dateNOW, "ABR");
    this.automaticCalendar("2024-05-01", "2024-05-31", dateNOW, "MAY");
    this.automaticCalendar("2024-06-01", "2024-06-29", dateNOW, "JUN");
    this.automaticCalendar("2024-07-01", "2024-07-31", dateNOW, "JUL");
    this.automaticCalendar("2024-08-01", "2024-08-31", dateNOW, "AGO");
    this.automaticCalendar("2024-09-01", "2024-09-30", dateNOW, "SEP");
    this.automaticCalendar("2024-10-01", "2024-10-31", dateNOW, "OCT");
    this.automaticCalendar("2024-11-01", "2024-11-30", dateNOW, "NOV");
    this.automaticCalendar("2024-12-01", "2024-12-30", dateNOW, "DIC");

    this.endpoints.getGamesReleaseDate(this.elementTBA, "2025-01-01", "2024-01-31", "ENETBA", false);
    this.endpoints.getGamesReleaseDate(this.elementTBA, "2025-02-01", "2024-02-28", "FEBTBA", false);
    this.endpoints.getGamesReleaseDate(this.elementTBA, "2025-03-01", "2024-03-31", "MARTBA", false);
    this.endpoints.getGamesReleaseDate(this.elementTBA, "2025-04-01", "2025-04-30", "ABRTBA", false);
    this.endpoints.getGamesReleaseDate(this.elementTBA, "2025-05-01", "2025-05-31", "MAYTBA", false);
    this.endpoints.getGamesReleaseDate(this.elementTBA, "2025-06-01", "2025-06-30", "JUNTBA", false);
    this.endpoints.getGamesReleaseDate(this.elementTBA, "2025-07-01", "2025-07-31", "JULTBA", false);
    this.endpoints.getGamesReleaseDate(this.elementTBA, "2025-08-01", "2025-08-31", "AGOTBA", false);
    this.endpoints.getGamesReleaseDate(this.elementTBA, "2025-09-01", "2025-09-30", "SEPTBA", false);
    this.endpoints.getGamesReleaseDate(this.elementTBA, "2025-10-01", "2025-10-31", "OCTTBA", false);
    this.endpoints.getGamesReleaseDate(this.elementTBA, "2025-11-01", "2025-11-30", "NOVTBA", false);
    this.endpoints.getGamesReleaseDate(this.elementTBA, "2025-12-01", "2025-12-31", "DICTBA", false);

  }

  automaticCalendar(initialDate: string, finishDate: string, dateNOW: string, appendTable: string) {

    let unixInitial = this.utils.realDateToUnixTimeStamp(initialDate);
    let unixFinish = this.utils.realDateToUnixTimeStamp(finishDate) 
    let unixNOW = this.utils.realDateToUnixTimeStamp(dateNOW);

    if((unixNOW >= unixInitial) && (unixNOW <= unixFinish)) {
      this.endpoints.getGamesReleaseDate(this.elementId, dateNOW, finishDate, appendTable, false);
    } else if (unixNOW < unixInitial) {
      this.endpoints.getGamesReleaseDate(this.elementId, initialDate, finishDate, appendTable, false);
    } else if (unixNOW > unixFinish) {
      console.log("NO HAY FECHA")
    }
  }

}
