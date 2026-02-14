import { Component, inject } from '@angular/core';
import { Utils } from 'src/app/utils/utils';
import { EndpointsService } from '../../services/endpoints/endpoints.service';
import { Constantes } from 'src/app/utils/constantes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../../../src/app/app.component.scss'],
})
export class HomeComponent {
  private endpoints: EndpointsService = inject(EndpointsService);
  private utils: Utils = inject(Utils);

  actualYear = 'actualYear';
  actualTBA = 'actualTBA';
  nextYear = 'nextYear';
  nextYearTBA = 'nextYearTBA';

  highlighted = 'highlighted';

  constructor() {}

  async ngOnInit(): Promise<void> {
    let fechaActual = this.utils.formatDateNow(0);

    this.getGamesActualYear(fechaActual);
    //this.getGamesNextYear(fechaActual);
  }

  getGamesActualYear(fechaActual: string) {
    Constantes.ACTUAL_YEAR.forEach((month) => {
      this.automaticCalendar(
        this.actualYear,
        month.start,
        month.end,
        fechaActual,
        month.label
      );
      this.sleep(1000);
    });

    Constantes.ACTUAL_TBA_YEAR.forEach((month) => {
      this.automaticCalendarTBA(
        this.actualTBA,
        month.start,
        month.end,
        fechaActual,
        month.label
      );
      this.sleep(1000);
    });
  }

  getGamesNextYear(fechaActual: string) {
    Constantes.NEXT_YEAR.forEach((month) => {
      this.automaticCalendar(
        this.nextYear,
        month.start,
        month.end,
        fechaActual,
        month.label
      );
      this.sleep(1000);
    });

    Constantes.NEXT_TBA_YEAR.forEach((month) => {
      this.automaticCalendar(
        this.nextYearTBA,
        month.start,
        month.end,
        fechaActual,
        month.label
      );
      this.sleep(1000);
    });
  }

  automaticCalendar(
    elementalId: string,
    fechaInicial: string,
    fechaFinal: string,
    fechaActual: string,
    agregarTabla: string
  ) {
    let dateUnixInicio = this.utils.realDateToUnixTimeStamp(fechaInicial);
    let dateUnixFinal = this.utils.realDateToUnixTimeStamp(fechaFinal);
    let dateUnixAHORA = this.utils.realDateToUnixTimeStamp(fechaActual);

    if (dateUnixAHORA >= dateUnixInicio && dateUnixAHORA <= dateUnixFinal) {
      this.endpoints.getGamesReleaseDate(
        elementalId,
        fechaActual,
        fechaFinal,
        agregarTabla
      );
    } else if (dateUnixAHORA < dateUnixInicio) {
      this.endpoints.getGamesReleaseDate(
        elementalId,
        fechaInicial,
        fechaFinal,
        agregarTabla
      );
    }
  }

  automaticCalendarTBA(
    elementalId: string,
    fechaInicial: string,
    fechaFinal: string,
    fechaActual: string,
    agregarTabla: string
  ) {
    let dateUnixInicio = this.utils.realDateToUnixTimeStamp(fechaInicial);
    let dateUnixFinal = this.utils.realDateToUnixTimeStamp(fechaFinal);
    let dateUnixAHORA = this.utils.realDateToUnixTimeStamp(fechaActual);

    if (dateUnixAHORA >= dateUnixInicio && dateUnixAHORA <= dateUnixFinal) {
      this.endpoints.getGamesReleaseDateTBA(
        elementalId,
        fechaActual,
        fechaFinal,
        agregarTabla
      );
    } else if (dateUnixAHORA < dateUnixInicio) {
      this.endpoints.getGamesReleaseDateTBA(
        elementalId,
        fechaInicial,
        fechaFinal,
        agregarTabla
      );
    }
  }

  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
