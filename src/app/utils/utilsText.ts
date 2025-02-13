import { Injectable, inject } from '@angular/core';
import { Constantes } from './constantes';
import { UtilsBadges } from './utilsBadges';

@Injectable({
  providedIn: 'root'
})
export class UtilsText {

  private constantes: Constantes = inject(Constantes);
  private utilsBadges: UtilsBadges = inject(UtilsBadges);

  constructor() { }

  createNode(itemId: any, releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string, options: any = {}) {
    const {
      backgroundColor = 'white',
      icon = '',
      iconColor = '',
      extraText = '',
      textColor = 'black',
      hasReleaseDate = true
    } = options;

    // Condicional para mostrar o no la fecha de lanzamiento
    const releaseText = hasReleaseDate ? releaseDate + ' - ' : '';

    let favoritos = `<i style="color: red;" class="bi bi-heart-fill" id="favorite-${itemId}"></i>`;

    let cadena = `<div style="color: ${textColor};">
        ${releaseText}<b>${favoritos} ${icon ? `<i class="${icon}" style="color: ${iconColor}; text-shadow: 0 0 10px black;"></i>` : ''}
        ${extraText} <a style="color: ${textColor}; text-decoration: none;" target="_blank" href="https://www.igdb.com/games/${slug}">${name}</a></b>
      </div>
      <div class="text-end">${cadenaPlatforms}</div>`;

    const app = document.getElementById(varTable);
    const div = document.createElement("li");

    div.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
    div.setAttribute("style", `background-color: ${backgroundColor};`);
    div.innerHTML = cadena;
    app?.appendChild(div);

    const favoriteIcon = document.getElementById(`favorite-${itemId}`);
    if (favoriteIcon) favoriteIcon.addEventListener('click', () => this.addFavorite(itemId));
  }

  createNotNode(releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string, options: any = {}) {
    const {
      backgroundColor = 'white',
      extraText = '',
      textColor = 'black',
      hasReleaseDate = true
    } = options;

    // Condicional para mostrar o no la fecha de lanzamiento
    const releaseText = hasReleaseDate ? releaseDate + ' - ' : '';

    let cadena = `<div style="color: ${textColor};"> ${releaseText} ${extraText} ${name} </div>
      <div class="text-end">${cadenaPlatforms}</div>`;

    const app = document.getElementById(varTable);
    const div = document.createElement("li");

    div.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
    div.setAttribute("style", `background-color: ${backgroundColor};`);
    div.innerHTML = cadena;
    app?.appendChild(div);
  }


  // Funciones específicas con diferentes configuraciones

  createStandardNode(itemId: any, releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    this.createNode(itemId, releaseDate, name, slug, cadenaPlatforms, varTable);
  }

  createStarNode(itemId: any, releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    this.createNode(itemId, releaseDate, name, slug, cadenaPlatforms, varTable, {
      backgroundColor: 'afedbc',
      textColor: 'white'
    });
  }

  createSeasonNode(itemId: any, releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    this.createNode(itemId, releaseDate, name, slug, cadenaPlatforms, varTable, {
      backgroundColor: 'grey',
      textColor: 'white'
    });
  }

  createExpansionNode(itemId: any, releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    this.createNode(itemId, releaseDate, name, slug, cadenaPlatforms, varTable, {
      backgroundColor: 'blue',
      extraText: '<span style="color: white; text-shadow: 0 0 10px black;">DLC</span> ',
      textColor: 'white'
    });
  }

  createExpansionTBANode(itemId: any, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    this.createNode(itemId, '', name, slug, cadenaPlatforms, varTable, {
      backgroundColor: 'afedbc',
      extraText: '<span style="color: white; text-shadow: 0 0 10px black;">DLC</span> ',
      textColor: 'white',
      hasReleaseDate: false
    });
  }

  createStarTBANode(itemId: any, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    this.createNode(itemId, '', name, slug, cadenaPlatforms, varTable, {
      backgroundColor: 'afedbc',
      textColor: 'white',
      hasReleaseDate: false
    });
  }

  createTBANode(itemId: any, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    this.createNode(itemId, '', name, slug, cadenaPlatforms, varTable, {
      hasReleaseDate: false
    });
  }

  createAnyNode(itemId: any, varTable: string) {
    this.createNode(itemId, '', 'El mes no ha pasado todavía', '', '', varTable, {
      hasReleaseDate: false
    });
  }

  createNothingNode(varTable: string) {
    this.createNotNode('', 'No hay nada para este mes.', '', '', varTable, {
      hasReleaseDate: false
    });
  }

  createNothingFavoriteNode(varTable: string) {
    this.createNotNode('', 'No tiene juegos favoritos.', '', '', varTable, {
      hasReleaseDate: false
    });
  }

  addFavorite(itemId: any) {
    
    let favLocal: any[] = JSON.parse(localStorage.getItem('favoritos') || '[]');

    if (!favLocal.includes(itemId)) {
      favLocal.push(itemId);      
      localStorage.setItem('favoritos', JSON.stringify(favLocal));
    }
  }

}