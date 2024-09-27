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

  createNode(releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string, options: any = {}) {
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

    let cadena = `<div style="color: ${textColor};">
        ${releaseText}<b>${icon ? `<i class="${icon}" style="color: ${iconColor}; text-shadow: 0 0 10px black;"></i>` : ''} 
        ${extraText}<a style="color: ${textColor}; text-decoration: none;" target="_blank" href="https://www.igdb.com/games/${slug}">${name}</a></b>
      </div>
      <div class="text-end">${cadenaPlatforms}</div>`;

    const app = document.getElementById(varTable);
    const div = document.createElement("li");

    div.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
    div.setAttribute("style", `background-color: ${backgroundColor};`);
    div.innerHTML = cadena;
    app?.appendChild(div);
  }

  // Funciones específicas con diferentes configuraciones

  createStandardNode(releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    this.createNode(releaseDate, name, slug, cadenaPlatforms, varTable);
  }

  createStarNode(releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    this.createNode(releaseDate, name, slug, cadenaPlatforms, varTable, {
      backgroundColor: 'green',
      icon: 'bi bi-star-fill',
      iconColor: 'yellow',
      textColor: 'white'
    });
  }

  createSeasonNode(releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    this.createNode(releaseDate, name, slug, cadenaPlatforms, varTable, {
      backgroundColor: 'grey',
      icon: 'bi bi-calendar2-plus-fill',
      iconColor: 'white',
      textColor: 'white'
    });
  }

  createExpansionNode(releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    this.createNode(releaseDate, name, slug, cadenaPlatforms, varTable, {
      backgroundColor: 'blue',
      extraText: '<span style="color: white; text-shadow: 0 0 10px black;">DLC</span> ',
      textColor: 'white'
    });
  }

  createExpansionTBANode(name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    this.createNode('', name, slug, cadenaPlatforms, varTable, {
      backgroundColor: 'green',
      extraText: '<span style="color: white; text-shadow: 0 0 10px black;">DLC</span> ',
      textColor: 'white',
      hasReleaseDate: false
    });
  }

  createStarTBANode(name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    this.createNode('', name, slug, cadenaPlatforms, varTable, {
      backgroundColor: 'green',
      icon: 'bi bi-star-fill',
      iconColor: 'yellow',
      textColor: 'white',
      hasReleaseDate: false
    });
  }

  createTBANode(name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    this.createNode('', name, slug, cadenaPlatforms, varTable, {
      hasReleaseDate: false
    });
  }

  createAnyNode(varTable: string) {
    this.createNode('', 'El mes no ha pasado todavía', '', '', varTable, {
      hasReleaseDate: false
    });
  }

  createNothingNode(varTable: string) {
    this.createNode('', 'No hay nada para este mes.', '', '', varTable, {
      hasReleaseDate: false
    });
  }

}