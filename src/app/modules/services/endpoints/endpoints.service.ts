import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utils } from 'src/app/utils/utils';
import { Constantes } from 'src/app/utils/constantes';
import { UtilsHeader } from 'src/app/utils/utilsHeader';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  private http: HttpClient = inject(HttpClient);
  private utils: Utils = inject(Utils);
  private utilsHeader: UtilsHeader = inject(UtilsHeader);

  constructor() { }

  getGamesReleaseDate(elementId: string, initialDate: string, finishDate: string, appendTable: string) {
    
    let initialUNIX = this.utils.realDateToUnixTimeStamp(initialDate);
    let finishUNIX = this.utils.realDateToUnixTimeStamp(finishDate);
    let dataURL = Constantes.CORS_SH + "https://api.igdb.com/v4/games/";
    let headers;

    if(elementId === "yearCalendar") {
      headers = this.headerRequest();
    } else if (elementId === "yearTBA") {
      headers = this.headerYearTBA();
    } else {
      headers = this.headerPlusDay();
    }

    const data = 'fields name, slug, platforms.name, first_release_date, involved_companies.company.name; limit 300; where first_release_date >= ' + 
      initialUNIX + ' & first_release_date <= ' + finishUNIX + ' & version_parent = null & hypes >= 3; sort first_release_date asc;'

    let response = this.http.post(dataURL, data, { headers });

    if(response) {
      let varTable = this.utils.createElementNode(elementId, appendTable);

      response.subscribe((data: any) => {
        data = data.map((item: any) => {
          return {
            releaseDate: this.utils.unixTimeStampToRealDate(item.first_release_date),
            name: item.name,
            platforms: item.platforms,
            companies: item.involved_companies,
            slug: item.slug,
          }
        });
        this.utils.postCalendarList(data, varTable);
      });
    }
  }

  getGamesPlusDate(elementId: string, initialDate: string, finishDate: string) {
    
    let initialUNIX = this.utils.realDateToUnixTimeStamp(initialDate);
    let finishUNIX = this.utils.realDateToUnixTimeStamp(finishDate);
    let dataURL = Constantes.CORS_SH + "https://api.igdb.com/v4/games/";
    let headers = this.headerPlusDay();

    const data = 'fields name, slug, platforms.name, first_release_date, cover.url; limit 300; where first_release_date >= ' + 
      initialUNIX + ' & first_release_date <= ' + finishUNIX + ' & version_parent = null & hypes >= 3; sort first_release_date asc; limit 14;'

    let response = this.http.post(dataURL, data, { headers });

    if(response) {
      response.subscribe((data: any) => {
        data = data.map((item: any) => {
          return {
            releaseDate: this.utils.unixTimeStampToRealDate(item.first_release_date),
            name: item.name,
            platforms: item.platforms,
            cover: item.cover?.url || null,
            slug: item.slug,
          }
        });
        this.utilsHeader.postHeaderList(data, elementId);
      });
    }
  }

  headerRequest () {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': Constantes.BEARER_FINAL,
      'Client-ID': Constantes.CLIENT_ID, 
      'x-cors-api-key': Constantes.CORS_SH_KEY,
    });
  }

  headerYearTBA () {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': Constantes.BEARER_V2,
      'Client-ID': Constantes.CLIENT_ID_V2,
      'x-cors-api-key': Constantes.CORS_SH_KEY,
    });
  }

  headerPlusDay () {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': Constantes.BEARER_V3,
      'Client-ID': Constantes.CLIENT_ID_V3,
      'x-cors-api-key': Constantes.CORS_SH_KEY,
    });
  }
  
}
