import { Injectable, inject } from '@angular/core';
import { Constantes } from './constantes';
import { UtilsBadges } from './utilsBadges';
import { UtilsText } from './utilsText';

@Injectable({
  providedIn: 'root'
})
export class Utils {
  
  private utilsBadges: UtilsBadges = inject(UtilsBadges);
  private utilsText: UtilsText = inject(UtilsText);

  constructor() { }

  NOW_DATE = new Date();
  GAMES_ARRAY = Constantes.STAR_GAMES;
  DLC_ARRAY = Constantes.STAR_DLC;

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

  formatDateNow(days: number) {
    let currentDate = new Date(this.NOW_DATE);
    currentDate.setDate(currentDate.getDate() + days);
  
    let year = currentDate.getFullYear();
    let monthUTC = currentDate.getMonth() + 1;
    let dayUTC = currentDate.getDate();

    let month = monthUTC < 10 ? '0' + monthUTC : String(monthUTC);
    let day = dayUTC < 10 ? '0' + dayUTC : String(dayUTC);

    let dateNow = year + '-' + month + '-' + day;
    return dateNow;
  }

  createElementNode(elementId: string, appendTable: string) {
    let varMonth = "";
    let varTable = "table" + appendTable;
  
    const constantMap: { [key: string]: any[] } = {
      "actualYear": Constantes.MONTHS_YEAR,
      "actualTBA": Constantes.ACTUAL_YEAR_TBA,
      "nextYear": Constantes.MONTHS_YEAR_TBA,
      "nextYearTBA": Constantes.GAMES_YEAR_TBA,
    };
  
    const selectedArray = constantMap[elementId];
  
    if (selectedArray) {
      const matchedElement = selectedArray.find(element => element.append === appendTable);
      if (matchedElement) {
        varMonth = matchedElement.opcion;
      }
    }
  
    let cadena = `<div id="month"><h4 style="padding: 10px;">${varMonth}</h4><ul id="${varTable}" class="list-group"></ul></div>`;
    const app = document.getElementById(elementId);
    const div = document.createElement("div");
  
    div.setAttribute("class", "col-md-6");
    div.innerHTML = cadena;
    app?.appendChild(div);
  
    return varTable;
  }
  
  postCalendarList(data: any[], varTable: string) {
    if (data.length === 0) {
      this.utilsText.createNothingNode(varTable);
      return;
    }
  
    data.forEach((item: any) => {
      const cadenaPlatforms = this.utilsBadges.getPlatformsArray(item.id, item.platforms);
      this.postLabel(item.releaseDate, item.name, item.slug, cadenaPlatforms, varTable);
    });
  }  

  postLabel(releaseDate: string, name: string, slug: string, cadenaPlatforms: string, varTable: string) {  
    const nameToFind = name;
    const nameToSearch = this.GAMES_ARRAY.includes(nameToFind);
    const dlcToSearch = this.DLC_ARRAY.includes(nameToFind);
    const isTBA = varTable.includes("TBA");
  
    if (nameToSearch && !isTBA) {
      this.utilsText.createStarNode(releaseDate, name, slug, cadenaPlatforms, varTable);
    } else if (nameToSearch && isTBA) {
      this.utilsText.createStarTBANode(name, slug, cadenaPlatforms, varTable);
    } else if (dlcToSearch && !isTBA) {
      this.utilsText.createExpansionNode(releaseDate, name, slug, cadenaPlatforms, varTable);
    } else if (dlcToSearch && isTBA) {
      this.utilsText.createExpansionTBANode(name, slug, cadenaPlatforms, varTable);
    } else if (isTBA) {
      this.utilsText.createTBANode(name, slug, cadenaPlatforms, varTable);
    } else {
      this.utilsText.createStandardNode(releaseDate, name, slug, cadenaPlatforms, varTable);
    }
  }

}
