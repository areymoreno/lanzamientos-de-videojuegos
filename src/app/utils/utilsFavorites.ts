import { Injectable, inject } from '@angular/core';
import { UtilsBadges } from './utilsBadges';
import { UtilsText } from './utilsText';
import { Constantes } from './constantes';

@Injectable({
  providedIn: 'root'
})
export class UtilsFavorites {

  private utilsBadges: UtilsBadges = inject(UtilsBadges);
  private utilsText: UtilsText = inject(UtilsText);

  constructor() { }

  GAMES_ARRAY = Constantes.STAR_GAMES;

  createFavoriteNode(elementId: string) {
    const varTable = "listFavorites";
    let cadena = `<div><ul id="${varTable}" class="list-group"></ul></div>`;

    const app = document.getElementById(elementId);
    const div = document.createElement("div");

    div.setAttribute("class", "col-md-12");
    div.innerHTML = cadena;
    app?.appendChild(div);  

    return varTable;

  }

  postCalendarList(data: any[], varTable: string) { 
    data.forEach((item: any) => {
      const cadenaPlatforms = this.utilsBadges.getPlatformsArray(item.id, item.platforms);
      this.postLabel(item.id, item.releaseDate, item.name, item.slug, cadenaPlatforms, varTable);
    });
  }
  
  postLabel(itemId: any, releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {  
    const nameToFind = name;
    const nameToSearch = this.GAMES_ARRAY.includes(nameToFind);
  
    if (nameToSearch) {
      this.createStarNode(itemId, releaseDate, name, slug, cadenaPlatforms, varTable);
    } else {
      this.createStandardNode(itemId, releaseDate, name, slug, cadenaPlatforms, varTable);
    }
  }

  createStandardNode(itemId: any, releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    this.createNode(itemId, releaseDate, name, slug, cadenaPlatforms, varTable);
  }

  createStarNode(itemId: any, releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    this.createNode(itemId, releaseDate, name, slug, cadenaPlatforms, varTable, {
      backgroundColor: 'afedbc',
      textColor: 'white'
    });
  }

  createNode(itemId: any, releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string, options: any = {}) {
    const {
      backgroundColor = 'white',
      extraText = '',
      textColor = 'black',
      hasReleaseDate = true
    } = options;

    // Condicional para mostrar o no la fecha de lanzamiento
    const releaseText = hasReleaseDate ? releaseDate + ' - ' : '';

    let favoritos = `<i style="color: red;" class="bi bi-heartbreak-fill" id="favorite-${itemId}"></i>`;

    let cadena = `<div style="color: ${textColor};">
        ${releaseText}<b>${favoritos} ${extraText} <a style="color: ${textColor}; text-decoration: none;" target="_blank" href="https://www.igdb.com/games/${slug}">${name}</a></b>
      </div>
      <div class="text-end">${cadenaPlatforms}</div>`;

    const app = document.getElementById(varTable);
    const div = document.createElement("li");

    div.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
    div.setAttribute("style", `background-color: ${backgroundColor};`);
    div.innerHTML = cadena;
    app?.appendChild(div);

    const favoriteIcon = document.getElementById(`favorite-${itemId}`);
    if (favoriteIcon) favoriteIcon.addEventListener('click', () => this.delFavorite(itemId, name));
  }
  
  delFavorite(itemId: any, name: string) {
    const favorites = JSON.parse(localStorage.getItem('favoritos') || '[]');
    const updatedFavorites = favorites.filter((item: any) => item !== itemId);

    localStorage.setItem('favoritos', JSON.stringify(updatedFavorites));

    this.sleep(5000);
    window.location.reload();
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  

}