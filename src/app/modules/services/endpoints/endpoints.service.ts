import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utils } from 'src/app/utils/utils';
import { Constantes } from 'src/app/utils/constantes';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  private http: HttpClient = inject(HttpClient);
  private utils: Utils = inject(Utils);

  constructor() { }

  getGamesReleaseDate(elementId: string, initialDate: string, finishDate: string, appendTable: string, boolDeath: boolean) {

    let initialUNIX = this.utils.realDateToUnixTimeStamp(initialDate);
    let finishUNIX = this.utils.realDateToUnixTimeStamp(finishDate);

    let dataURL = Constantes.CORS_SH + "https://api.igdb.com/v4/games/";

    let headers;

    if(elementId === "yearCalendar") {
      headers = this.headerRequest();
    } else {
      headers = this.headerTelegram();
    } 

    const data = 'fields name, slug, platforms.name, first_release_date, involved_companies.company.name; limit 300; where first_release_date >= ' + 
      initialUNIX + ' & first_release_date <= ' + finishUNIX + ' & version_parent = null; sort first_release_date asc;'

    let response = this.http.post(dataURL, data, { headers });

    if(response) {
      let varTable = "";
      if(boolDeath) {
        varTable = this.utils.createElementNode(elementId, appendTable, boolDeath);
      } else {
        varTable = this.utils.createElementNode(elementId, appendTable, boolDeath);
      }    

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
        //console.log("data COCINADA >", data);
        this.utils.postCalendarList(data, varTable);
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

  headerTelegram () {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': Constantes.BEARER_TELEGRAM,
      'Client-ID': Constantes.CLIENT_ID_TELEGRAM, 
      'x-cors-api-key': Constantes.CORS_SH_KEY,
    });
  }
}
