import { Injectable, inject } from '@angular/core';
import { Constantes } from './constantes';
import { UtilsBadges } from './utilsBadges';
import { UtilsText } from './utilsText';

@Injectable({
  providedIn: 'root'
})
export class Utils {

  private constantes: Constantes = inject(Constantes);
  private utilsBadges: UtilsBadges = inject(UtilsBadges);
  private utilsText: UtilsText = inject(UtilsText);

  constructor() { }

  NOW_DATE = new Date();
  GAMES_ARRAY = Constantes.STAR_GAMES;
  PATCH_ARRAY = Constantes.PATCH_GAMES;
  SEASON_ARRAY = Constantes.SEASON_GAMES;

  unixTimeStampToRealDate(unixTimeStamp: number) {
    const miliseconds = unixTimeStamp * 1000;
    const date = new Date(miliseconds);

    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);

    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  }

  realDateToUnixTimeStamp(realDate: string | number | Date) {
    const dateObject = new Date(realDate);
    const unixTimeStamp = Math.floor(dateObject.getTime() / 1000);
    return unixTimeStamp;
  }

  isBoolean (condicion: number): boolean {
    if (condicion !== -1) {
      return true;
    }
    return false;
  }

  formatDateNow() {
    let year = this.NOW_DATE.getFullYear();
    let monthUTC = this.NOW_DATE.getMonth() + 1;
    let dayUTC = this.NOW_DATE.getDate();

    let month = '0';
    let day = '0';

    if (monthUTC < 10) {
      month = '0' + monthUTC;
    } else {
      month = String(monthUTC);
    }

    if (dayUTC < 10) {
      day = '0' + dayUTC;
    } else {
      day = String(dayUTC);
    }

    let dateNow = year + '-' + month + '-' + day;
    return dateNow;
  }


  createElementNode(elementId: string, appendTable: string, deathBool: boolean) {

    let varMonth = "";
    let varTable = "table" + appendTable;

    if(elementId === "yearCalendar") {
      Constantes.MONTHS_YEAR.forEach(element => {
        if (element.append === appendTable) {
          varMonth = element.opcion;
        }
      });
    } else if(elementId === "yearTBA") {
      Constantes.MONTHS_YEAR_TBA.forEach(element => {
        if (element.append === appendTable) {
          varMonth = element.opcion;
        }
      });
    }    

    let cadena = '<div id="month"><h4 style="padding: 10px;">' + varMonth + '</h4><ul id="' + varTable + '" class="list-group"></ul></div>';

    const app = document.getElementById(elementId);
    const div = document.createElement("div");

    if(deathBool) {
      div.setAttribute("class", "col-md-4");
    } else {
      div.setAttribute("class", "col-md-6");
    }

    div.innerHTML = cadena;
    app?.appendChild(div);
    
    return varTable;
  }

  postCalendarList(data: any, varTable: string) {
    data.forEach((item: any) => {
      let cadenaPlatforms = this.utilsBadges.getPlatformsArray(item.platforms);
      this.postLabel(item.releaseDate, item.name, item.slug, cadenaPlatforms, varTable);
    })
  }

  postLabel (releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {  

    let boolName, boolSeason, boolPatch;

    const nameToFind = name;

    const nameToSearch = this.GAMES_ARRAY.findIndex(elemento => elemento === nameToFind);
    const seasonToSearch = this.SEASON_ARRAY.findIndex(elemento => elemento === nameToFind);
    const patchToSearch = this.PATCH_ARRAY.findIndex(elemento => elemento === nameToFind);

    boolName = this.isBoolean(nameToSearch);
    boolSeason = this.isBoolean(seasonToSearch);
    boolPatch = this.isBoolean(patchToSearch);

      if (boolName && (varTable != "tableTBA")) {
        this.utilsText.createStarNode(releaseDate, name, slug, cadenaPlatforms, varTable);
      } else if (boolSeason) {
        this.utilsText.createSeasonNode(releaseDate, name, slug, cadenaPlatforms, varTable);
      } else if (boolPatch) {
        this.utilsText.createPatchNode(releaseDate, name, slug, cadenaPlatforms, varTable);
      } else if ((boolName) && (varTable === "tableTBA")) {
        this.utilsText.createStarTBANode(releaseDate, name, slug, cadenaPlatforms, varTable);
      } else if (varTable === "tableTBA") {
        this.utilsText.createTBANode(releaseDate, name, slug, cadenaPlatforms, varTable);
      } else {
        this.utilsText.createStandardNode(releaseDate, name, slug, cadenaPlatforms, varTable);
      }

  }
}
