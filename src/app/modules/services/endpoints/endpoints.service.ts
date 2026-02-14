import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utils } from 'src/app/utils/utils';
import { Keys } from 'src/app/utils/keys';
import { UtilsHeader } from 'src/app/utils/utilsHeader';

@Injectable({
  providedIn: 'root',
})
export class EndpointsService {
  private http: HttpClient = inject(HttpClient);
  private utils: Utils = inject(Utils);
  private utilsHeader: UtilsHeader = inject(UtilsHeader);

  constructor() {}

  getGamesReleaseDate(
    elementId: string,
    initialDate: string,
    finishDate: string,
    appendTable: string
  ) {
    const initialUNIX = this.utils.realDateToUnixTimeStamp(initialDate);
    const finishUNIX = this.utils.realDateToUnixTimeStamp(finishDate);

    const dataURL = `https://backend.lanzamientosdevideojuegos.es/api/games?fechaInicial=${initialUNIX}&fechaFinal=${finishUNIX}`;
    //const dataURL = 'api/games?fechaInicial=' + initialUNIX + '&fechaFinal=' + finishUNIX;

    const response = this.http.post(dataURL, {}); // POST obligatorio, sin body útil

    if (response) {
      const varTable = this.utils.createElementNode(elementId, appendTable);

      response.subscribe((data: any) => {
        const juegos = [];

        for (const key in data) {
          if (!data.hasOwnProperty(key)) continue;

          const item = data[key];

          juegos.push({
            id: item.id,
            releaseDate: this.utils.unixTimeStampToRealDate(
              item.first_release_date
            ),
            name: item.name,
            platforms: item.platforms,
            companies: item.involved_companies,
            slug: item.slug,
            cover: item.cover,
            formattedDate: item.formatted_date,
          });
        }
        this.utils.postCalendarList(juegos, varTable);
      });
    }
  }

  getGamesReleaseDateTBA(
    elementId: string,
    initialDate: string,
    finishDate: string,
    appendTable: string
  ) {
    const initialUNIX = this.utils.realDateToUnixTimeStamp(initialDate);
    const finishUNIX = this.utils.realDateToUnixTimeStamp(finishDate);

    const dataURL = `https://backend.lanzamientosdevideojuegos.es/api/gamesTBA?fechaInicial=${initialUNIX}&fechaFinal=${finishUNIX}`;
    //const dataURL = 'api/games?fechaInicial=' + initialUNIX + '&fechaFinal=' + finishUNIX;

    const response = this.http.post(dataURL, {}); // POST obligatorio, sin body útil

    if (response) {
      const varTable = this.utils.createElementNode(elementId, appendTable);

      response.subscribe((data: any) => {
        const juegos = [];

        for (const key in data) {
          if (!data.hasOwnProperty(key)) continue;

          const item = data[key];

          juegos.push({
            id: item.id,
            releaseDate: this.utils.unixTimeStampToRealDate(
              item.first_release_date
            ),
            name: item.name,
            platforms: item.platforms,
            companies: item.involved_companies,
            slug: item.slug,
            cover: item.cover,
            formattedDate: item.formatted_date,
          });
        }
        this.utils.postCalendarList(juegos, varTable);
      });
    }
  }
}
