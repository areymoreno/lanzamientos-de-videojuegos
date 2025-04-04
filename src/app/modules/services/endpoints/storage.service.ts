import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utils } from 'src/app/utils/utils';
import { UtilsText } from 'src/app/utils/utilsText';
import { UtilsFavorites } from 'src/app/utils/utilsFavorites';
import { Keys } from 'src/app/utils/keys';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private http: HttpClient = inject(HttpClient);
  private utils: Utils = inject(Utils);
  private utilsText: UtilsText = inject(UtilsText);
  private utilsFavorites: UtilsFavorites = inject(UtilsFavorites);

  constructor() { }

  getFavorites(favorites: any[], elementId: string) {
    let dataURL = Keys.CORS_SH + "https://api.igdb.com/v4/games/";
    let headers = this.setHeader();

    let varTable = this.utilsFavorites.createFavoriteNode(elementId);

    if (favorites && favorites.length > 0) {
      const data = 'fields id, name, slug, platforms.name, first_release_date, involved_companies.company.name; where id = (' + favorites.join(',') + '); sort first_release_date asc;';
      let response = this.http.post(dataURL, data, { headers });

      if (response) {
        response.subscribe((data: any) => {
          data = data.map((item: any) => {
            return {
              id: item.id,
              releaseDate: this.utils.unixTimeStampToRealDate(item.first_release_date),
              name: item.name,
              platforms: item.platforms,
              companies: item.involved_companies,
              slug: item.slug,
            }
          });
          this.utilsFavorites.postCalendarList(data, varTable);
        });
      }
    } else {
        this.utilsText.createNothingFavoriteNode(varTable);
        return;
    }
  }

  setHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': Keys.BEARER_V1,
      'Client-ID': Keys.CLIENT_ID,
      'x-cors-api-key': Keys.CORS_SH_KEY,
    });
  }


}

