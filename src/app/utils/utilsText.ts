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
    div.setAttribute("style", "background-color: green");
    div.innerHTML = cadena;
    app?.appendChild(div);
  }

  createSeasonNode(releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    let cadena = '<div style="color: white;">' + releaseDate + ' - <b><i class="bi bi-calendar2-plus-fill" style="color: white; text-shadow: 0 0 10px black;"></i> <a style="color: white; text-decoration: none;" target="_blank" href="https://www.igdb.com/games/' + slug + '">' + name + '</a></b></div>' +
      '<div class="text-end">' + cadenaPlatforms + '</div>';

    const app = document.getElementById(varTable);
    const div = document.createElement("li");

    div.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
    div.setAttribute("style", "background-color: grey");
    div.innerHTML = cadena;
    app?.appendChild(div);
  }

  createExpansionNode(releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    let cadena = '<div style="color: white;">' + releaseDate + ' - <b><i class="bi bi-patch-check" style="color: white; text-shadow: 0 0 10px black;"></i> <a style="color: white; text-decoration: none;" target="_blank" href="https://www.igdb.com/games/' + slug + '">' + name + '</a></b></div>' +
      '<div class="text-end">' + cadenaPlatforms + '</div>';

    const app = document.getElementById(varTable);
    const div = document.createElement("li");

    div.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
    div.setAttribute("style", "background-color: blue");
    div.innerHTML = cadena;
    app?.appendChild(div);
  }

  createStarTBANode(releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    let cadena = '<div style="color: white;"><b><i class="bi bi-star-fill" style="color: yellow; text-shadow: 0 0 10px black;"></i> <a style="color: white; text-decoration: none;" target="_blank" href="https://www.igdb.com/games/' + slug + '">' + name + '</a></b></div>' +
      '<div class="text-end">' + cadenaPlatforms + '</div>';

    const app = document.getElementById(varTable);
    const div = document.createElement("li");

    div.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
    div.setAttribute("style", "background-color: green");
    div.innerHTML = cadena;
    app?.appendChild(div);
  }

  createTBANode(releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {
    let cadena = '<div><b><a style="color: black; text-decoration: none;" target="_blank" href="https://www.igdb.com/games/' + slug + '">' + name + '</a></b></div>' +
      '<div class="text-end">' + cadenaPlatforms + '</div>';

    const app = document.getElementById(varTable);
    const div = document.createElement("li");

    div.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
    div.innerHTML = cadena;
    app?.appendChild(div);
  }

  createAnyNode(varTable: string) {
    let cadena = '<div>El mes no ha pasado todavía</div>';

    const app = document.getElementById(varTable);
    const div = document.createElement("li");

    div.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
    div.innerHTML = cadena;
    app?.appendChild(div);
  }

  createNothingNode(varTable: string) {
    let cadena = '<div>No hay nada para este mes.</div>';

    const app = document.getElementById(varTable);
    const div = document.createElement("li");

    div.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
    div.innerHTML = cadena;
    app?.appendChild(div);
  }


}