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

    createStandardNode(releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
        let cadena = '<div>' + releaseDate + ' - <b><a style="color: black; text-decoration: none;" target="_blank" href="https://www.igdb.com/games/' + slug + '">' + name + '</a></b></div>' +
        '<div class="text-end">' + cadenaPlatforms + '</div>';

        const app = document.getElementById(varTable);
        const div = document.createElement("li");

        div.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
        div.innerHTML = cadena;
        app?.appendChild(div);
    }

  createStarNode(releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    let cadena = '<div style="color: white;">' + releaseDate + ' - <b><i class="bi bi-star-fill" style="color: yellow; text-shadow: 0 0 10px black;"></i> <a style="color: white; text-decoration: none;" target="_blank" href="https://www.igdb.com/games/' + slug + '">' + name + '</a></b></div>' +
    '<div class="text-end">' + cadenaPlatforms + '</div>';

    const app = document.getElementById(varTable);
    const div = document.createElement("li");

    div.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
    div.setAttribute("style", "background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); animation: progress-bar-stripes 1s linear infinite; background-size: 1rem 1rem; background-color: green");
    div.innerHTML = cadena;
    app?.appendChild(div);
  }

  createSeasonNode(releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    let cadena = '<div style="color: white;">' + releaseDate + ' - <b><a style="color: black; text-decoration: none;" target="_blank" href="https://www.igdb.com/games/' + slug + '">' + name + '</a></b></div>' +
    '<div class="text-end">' + cadenaPlatforms + '</div>';

    const app = document.getElementById(varTable);
    const div = document.createElement("li");

    div.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
    div.setAttribute("style", "background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); animation: progress-bar-stripes 1s linear infinite; background-size: 1rem 1rem; background-color: green");
    div.innerHTML = cadena;
    app?.appendChild(div);
  }

  createPathNode(releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    let cadena = '<div style="color: white;">' + releaseDate + ' - <b><a style="color: black; text-decoration: none;" target="_blank" href="https://www.igdb.com/games/' + slug + '">' + name + '</a></b></div>' +
    '<div class="text-end">' + cadenaPlatforms + '</div>';

    const app = document.getElementById(varTable);
    const div = document.createElement("li");

    div.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
    div.setAttribute("style", "background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); animation: progress-bar-stripes 1s linear infinite; background-size: 1rem 1rem; background-color: green");
    div.innerHTML = cadena;
    app?.appendChild(div);
  }

  createStarTBANode(releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    let cadena = '<div style="color: white;">' + releaseDate + ' - <b><a style="color: black; text-decoration: none;" target="_blank" href="https://www.igdb.com/games/' + slug + '">' + name + '</a></b></div>' +
    '<div class="text-end">' + cadenaPlatforms + '</div>';

    const app = document.getElementById(varTable);
    const div = document.createElement("li");

    div.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
    div.setAttribute("style", "background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); animation: progress-bar-stripes 1s linear infinite; background-size: 1rem 1rem; background-color: green");
    div.innerHTML = cadena;
    app?.appendChild(div);
  }

  createTBANode(releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    let cadena = '<div>' + releaseDate + ' - <b><a style="color: black; text-decoration: none;" target="_blank" href="https://www.igdb.com/games/' + slug + '">' + name + '</a></b></div>' +
    '<div class="text-end">' + cadenaPlatforms + '</div>';

    const app = document.getElementById(varTable);
    const div = document.createElement("li");

    div.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
    div.setAttribute("style", "background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); animation: progress-bar-stripes 1s linear infinite; background-size: 1rem 1rem; background-color: green");
    div.innerHTML = cadena;
    app?.appendChild(div);
  }

}