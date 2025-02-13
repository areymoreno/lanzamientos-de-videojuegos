import { Injectable, inject } from '@angular/core';
import { Constantes } from './constantes';

@Injectable({
  providedIn: 'root'
})
export class UtilsBadges {

  private constantes: Constantes = inject(Constantes);

  constructor() { }

  getPlatformsArray(id: any, platforms: any) {
    // Define the type for platform counts
    type PlatformCounts = {
      playstation: number;
      xbox: number;
      nintendo: number;
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
      pc: 0,
      smartphone: 0,
      apple: 0,
      meta: 0,
      psvr2: 0,
      vr: 0
    };

    // Define the type for platform IDs
    const platformIds: { [key: string]: number[] } = {
      playstation: [48, 167],
      xbox: [49, 169],
      nintendo: [130],
      pc: [6],
      apple: [14],
      smartphone: [39, 34],
      meta: [386, 471],
      psvr2: [390],
      vr: [163]
    };

    platforms.forEach((item: any) => {
      for (const platform in platformIds) {
        if (platformIds[platform].includes(item.id)) {
          platformCounts[platform as keyof PlatformCounts]++;
        }
      }
    });

    return this.postPlatforms(
      id,
      platformCounts.playstation,
      platformCounts.xbox,
      platformCounts.nintendo,
      platformCounts.pc,
      platformCounts.smartphone,
      platformCounts.apple,
      platformCounts.meta,
      platformCounts.psvr2,
      platformCounts.vr
    );
  }

  postPlatforms(id: number, playstation: number, xbox: number, nintendo: number, pc: number, smartphone: number, apple: number, meta: number, psvr2: number, vr: number) {
    const platforms = [
      { condition: playstation, badgeClass: 'text-bg-primary', title: 'PlayStation', icon: 'bi-playstation' },
      { condition: xbox, badgeClass: 'text-bg-success', title: 'Xbox', icon: 'bi-xbox' },
      { condition: nintendo, badgeClass: 'text-bg-danger', title: 'Nintendo Switch', icon: 'bi-nintendo-switch' },
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

  addToFavorites(gameId: number) {
    let favorites = JSON.parse(localStorage.getItem('favorites') ?? '[]');
    if (!favorites.includes(gameId)) {
      favorites.push(gameId);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } 
  }

}