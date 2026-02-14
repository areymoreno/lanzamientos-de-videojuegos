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

    let favoritos = `<i style="color: red;" class="bi bi-heart" id="favorite-${itemId}"></i>`;
    let favoritosFill = `<i style="color: red;" class="bi bi-heart-fill" id="favorite-${itemId}"></i>`;

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
    if (favoriteIcon) {
      favoriteIcon.addEventListener('click', () => {
        // Alternar entre bi-heart y bi-heart-fill
        if (favoriteIcon.classList.contains('bi-heart')) {
          favoriteIcon.classList.remove('bi-heart');
          favoriteIcon.classList.add('bi-heart-fill');
          this.addFavorite(itemId);
        } else {
          favoriteIcon.classList.remove('bi-heart-fill');
          favoriteIcon.classList.add('bi-heart');
          this.delToFavorite(itemId);
        }
         // Llamar a la función para manejar favoritos
      });
    }

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
      backgroundColor: '69b778',
      textColor: 'white'
    });
  }

  createSeasonNode(itemId: any, releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    this.createNode(itemId, releaseDate, name, slug, cadenaPlatforms, varTable, {
      backgroundColor: 'grey',
      textColor: 'white'
    });
  }

  createStarTBANode(itemId: any, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    this.createNode(itemId, '', name, slug, cadenaPlatforms, varTable, {
      backgroundColor: '69b778',
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

  delToFavorite(itemId: any) {
    const favorites = JSON.parse(localStorage.getItem('favoritos') || '[]');
    const updatedFavorites = favorites.filter((item: any) => item !== itemId);

    localStorage.setItem('favoritos', JSON.stringify(updatedFavorites));
  }

}