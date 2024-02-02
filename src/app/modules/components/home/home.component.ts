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
  
  constructor () {
  }

  ngOnInit(): void {

    let dateNOW = this.utils.formatDateNow();
    //let dateNOW = "2024-01-01";

    this.automaticCalendar("2024-01-01", "2024-01-31", dateNOW, "ENE");
    this.automaticCalendar("2024-02-01", "2024-02-29", dateNOW, "FEB");
    this.automaticCalendar("2024-03-01", "2024-03-30", dateNOW, "MAR");
    this.automaticCalendar("2024-04-01", "2024-04-30", dateNOW, "ABR");
    this.automaticCalendar("2024-05-01", "2024-05-31", dateNOW, "MAY");
    this.automaticCalendar("2024-06-01", "2024-06-29", dateNOW, "JUN");
    this.automaticCalendar("2024-07-01", "2024-07-31", dateNOW, "JUL");
    this.automaticCalendar("2024-08-01", "2024-08-31", dateNOW, "AGO");
    this.automaticCalendar("2024-09-01", "2024-09-30", dateNOW, "SEP");
    this.automaticCalendar("2024-10-01", "2024-10-31", dateNOW, "OCT");
    this.automaticCalendar("2024-11-01", "2024-11-30", dateNOW, "NOV");
    this.automaticCalendar("2024-12-01", "2024-12-30", dateNOW, "DIC");

  }

  automaticCalendar(initialDate: string, finishDate: string, dateNOW: string, appendTable: string) {

    let unixInitial = this.utils.realDateToUnixTimeStamp(initialDate);
    let unixFinish = this.utils.realDateToUnixTimeStamp(finishDate) 
    let unixNOW = this.utils.realDateToUnixTimeStamp(dateNOW);

    if((unixNOW >= unixInitial) && (unixNOW <= unixFinish)) {
      this.endpoints.getGamesReleaseDate(dateNOW, finishDate, appendTable, false);
    } else if (unixNOW < unixInitial) {
      this.endpoints.getGamesReleaseDate(initialDate, finishDate, appendTable, false);
    } else if (unixNOW > unixFinish) {
      console.log("NO HAY FECHA")
    }
  }

}
