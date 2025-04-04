import { Injectable, inject } from '@angular/core';
import { Constantes } from './constantes';

@Injectable({
  providedIn: 'root'
})
export class UtilsHeader {

  postHeaderList(data: any[], varTable: string) {
    data.forEach((item: any) => {
      const cadenaPlatforms = this.getPlatformsArray(item.platforms);

      let cover = this.replaceImageSize(item.cover)
      let cadena = '<div class="card-img-overlay" style="margin-top: 150px;"><h5 class="card-title" style="color: white; font-weight: bold; text-shadow: 2px 2px 5px rgb(1, 1, 1);">' + item.releaseDate + '</h5>' +
        '<p class="card-text">' + cadenaPlatforms + '</small></p></div>';

      const app = document.getElementById(varTable);
      const div = document.createElement("div");

      div.setAttribute("class", "card");
      div.setAttribute("style", "background-image: url('" + cover + "'); height: 240px; width: 180px; margin: 2.5px;");
      div.innerHTML = cadena;
      app?.appendChild(div);
    });
  }

  replaceImageSize(url: string): string {
    if(url === null) {
      return "https://placehold.co/180x240?text=Ficha+Sin+Imagen";
    } else {
      url = "https:" + url;
      return url.replace("t_thumb", "t_cover_small_2x");
    }   
  }

  postPlatforms(playstation: number, xbox: number, nintendo: number, nintendoSwitch2: number, pc: number, smartphone: number, apple: number, meta: number, psvr2: number, vr: number) {
    const platforms = [
      { condition: playstation, badgeClass: 'text-bg-primary', title: 'PlayStation', icon: 'bi-playstation' },
      { condition: xbox, badgeClass: 'text-bg-success', title: 'Xbox', icon: 'bi-xbox' },
      { condition: nintendo, badgeClass: 'text-bg-danger', title: 'Nintendo Switch', icon: 'bi-nintendo-switch' },
      { condition: nintendoSwitch2, badgeClass: 'text-bg-danger', title: 'Nintendo Switch 2', icon: 'bi-nintendo-switch' },
      { condition: pc, badgeClass: 'text-bg-secondary', title: 'Windows', icon: 'bi-windows' },
      { condition: apple, badgeClass: 'text-bg-dark', title: 'Apple', icon: 'bi-apple' },
      { condition: meta, badgeClass: 'text-bg-info', title: 'Meta Quest', icon: 'bi-headset-vr' },
      { condition: psvr2, badgeClass: 'text-bg-primary', title: 'PlayStation VR2', icon: 'bi-headset-vr' },
      { condition: vr, badgeClass: 'text-bg-secondary', title: 'Steam VR', icon: 'bi-headset-vr' },
      { condition: smartphone, badgeClass: 'border border-dark text-bg-light', title: 'Smartphone', icon: 'bi-phone-fill' },
    ];

    let cadena = '';

    platforms.forEach(platform => {
      if (platform.condition) {
        cadena += `<span class="badge ${platform.badgeClass}" style="margin: 3px;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="${platform.title}"><i class="bi ${platform.icon}"></i></span>`;
      }
    });

    if (platforms.every(platform => !platform.condition)) {
      cadena += '<span class="badge text-bg-warning" style="margin: 3px;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Varias plataformas"><i class="bi bi-question-square-fill"></i></span>';
    }

    return cadena;
  }

  getPlatformsArray(platforms: any) {
    type PlatformCounts = {
      playstation: number;
      xbox: number;
      nintendo: number;
      nintendoSwitch2: number;
      pc: number;
      smartphone: number;
      apple: number;
      meta: number;
      psvr2: number;
      vr: number;
    };

    const platformCounts: PlatformCounts = {
      playstation: 0,
      xbox: 0,
      nintendo: 0,
      nintendoSwitch2: 0,  
      pc: 0,
      smartphone: 0,
      apple: 0,
      meta: 0,
      psvr2: 0,
      vr: 0
    };

    platforms.forEach((item: any) => {
      for (const platform in Constantes.platformIds) {
        if (Constantes.platformIds[platform].includes(item.id)) {
          platformCounts[platform as keyof PlatformCounts]++;
        }
      }
    });

    return this.postPlatforms(
      platformCounts.playstation,
      platformCounts.xbox,
      platformCounts.nintendo,
      platformCounts.nintendoSwitch2,
      platformCounts.pc,
      platformCounts.smartphone,
      platformCounts.apple,
      platformCounts.meta,
      platformCounts.psvr2,
      platformCounts.vr
    );
  }
}