import { Component, inject } from '@angular/core';
import { Utils } from 'src/app/utils/utils';
import { EndpointsService } from '../../services/endpoints/endpoints.service';
import { Constantes } from 'src/app/utils/constantes';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['../../../../../src/app/app.component.scss']
})
export class PastComponent {

  private endpoints: EndpointsService = inject(EndpointsService);
  private utils: Utils = inject(Utils);

  actualYear = "actualYear";
  actualTBA = "actualTBA";
  nextYear = "nextYear";
  nextYearTBA = "nextYearTBA";

  highlighted = "highlighted";
  
  constructor () {
  }

  async ngOnInit(): Promise<void> {

    let dateNOW = this.utils.formatDateNow(0);

    Constantes.ACTUAL_YEAR.forEach(month => {
      this.automaticCalendar(this.actualYear, month.start, month.end, dateNOW, month.label);
      this.sleep(1000);
    });
  
  }

  automaticCalendar(elementalId: string, initialDate: string, finishDate: string, dateNOW: string, appendTable: string) {

    let unixInitial = this.utils.realDateToUnixTimeStamp(initialDate);
    let unixFinish = this.utils.realDateToUnixTimeStamp(finishDate) 
    let unixNOW = this.utils.realDateToUnixTimeStamp(dateNOW);

    if((unixNOW <= unixInitial) && (unixNOW >= unixFinish)) {
      this.endpoints.getGamesReleaseDate(elementalId, initialDate, finishDate, appendTable);
    } else if (unixNOW > unixInitial) {
      this.endpoints.getGamesReleaseDate(elementalId, initialDate, dateNOW, appendTable);
    }
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
