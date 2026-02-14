import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utils } from 'src/app/utils/utils';
import { UtilsText } from 'src/app/utils/utilsText';
import { UtilsFavorites } from 'src/app/utils/utilsFavorites';
import { Keys } from 'src/app/utils/keys';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private http: HttpClient = inject(HttpClient);
  private utils: Utils = inject(Utils);
  private utilsText: UtilsText = inject(UtilsText);
  private utilsFavorites: UtilsFavorites = inject(UtilsFavorites);

  constructor() { }

  getFavorites(favorites: any[], elementId: string): Observable<any[]> {
    let varTable = this.utilsFavorites.createFavoriteNode(elementId);

    if (favorites && favorites.length > 0) {
      return this.http.post<any[]>('/api/favorites', { favorites }).pipe(
        map((data: any[]) => {
          return data.map((item: any) => ({
            id: item.id,
            releaseDate: this.utils.unixTimeStampToRealDate(item.first_release_date),
            name: item.name,
            platforms: item.platforms || [],
            companies: item.involved_companies || [],
            slug: item.slug,
          }));
        }),
        // Procesar datos y actualizar UI
        map((processedData: any[]) => {
          this.utilsFavorites.postCalendarList(processedData, varTable);
          return processedData;
        })
      );
    } else {
      this.utilsText.createNothingFavoriteNode(varTable);
      return new Observable(); // Observable vacío
    }
  }
}
