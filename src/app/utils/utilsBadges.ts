import { Injectable, inject } from '@angular/core';
import { Constantes } from './constantes';

@Injectable({
  providedIn: 'root'
})
export class UtilsBadges {

  private constantes: Constantes = inject(Constantes);

  constructor() { }

  getPlatformsArray(platforms: any) {
    let playstation = 0;
    let xbox = 0;
    let nintendo = 0;
    let pc = 0;
    let smartphone = 0;
    let apple = 0;

    let meta = 0;
    let psvr2 = 0;
    let vr = 0;

    platforms.forEach((item: any) => {
      switch (item.id) {
        case 48:
          playstation++;
          break;
        case 167:
          playstation++;
          break;
        case 49:
          xbox++;
          break;
        case 169:
          xbox++;
          break;
        case 130:
          nintendo++;
          break;
        case 6:
          pc++;
          break;
        case 14:
          apple++;
          break;
        case 39:
          smartphone++;
          break;
        case 34:
          smartphone++;
          break;
        case 386: // Meta Quest 2
          meta++;
          break;
        case 471: // Meta Quest 3
          meta++;
          break;
        case 390: // PSVR2
          psvr2++;
          break;
        case 163: // SteamVR
          vr++;
          break;
      }
    });

    return this.postPlatforms(playstation, xbox, nintendo, pc, smartphone, apple, meta, psvr2, vr);
  }

  postPlatforms(playstation: number, xbox: number, nintendo: number, pc: number, smartphone: number, apple: number, meta: number, psvr2: number, vr: number) {
    let cadena = '';

    if (playstation) {
      cadena = cadena + '<span class="badge text-bg-primary" style="margin: 0px 5px 0px 5px;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="PlayStation"><i class="bi bi-playstation"></i></span>';
    }

    if (xbox) {
      cadena = cadena + '<span class="badge text-bg-success" style="margin: 0px 5px 0px 5px;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Xbox"><i class="bi bi-xbox"></i></span>';
    }

    if (nintendo) {
      cadena = cadena + '<span class="badge text-bg-danger" style="margin: 0px 5px 0px 5px;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Nintendo Switch"><i class="bi bi-nintendo-switch"></i></span>';
    }

    if (pc) {
      cadena = cadena + '<span class="badge text-bg-secondary" style="margin: 0px 5px 0px 5px;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Windows"><i class="bi bi-windows"></i></span>';
    }

    if (apple) {
      cadena = cadena + '<span class="badge text-bg-dark" style="margin: 0px 5px 0px 5px;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Apple"><i class="bi bi-apple" ></i></span>';
    }

    if (meta) {
      cadena = cadena + '<span class="badge text-bg-info" style="margin: 0px 5px 0px 5px;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Meta Quest"><i class="bi bi-headset-vr"></i></span>';
    }

    if (psvr2) {
      cadena = cadena + '<span class="badge text-bg-primary" style="margin: 0px 5px 0px 5px;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="PlayStation VR2"><i class="bi bi-headset-vr"></i></span>';
    }

    if (vr) {
      cadena = cadena + '<span class="badge text-bg-secondary" style="margin: 0px 5px 0px 5px;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Steam VR"><i class="bi bi-headset-vr"></i></span>';
    }

    if (smartphone) {
      cadena = cadena + '<span class="badge border border-dark text-bg-light" style="margin: 0px 5px 0px 5px;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Smartphone"><i class="bi bi-phone-fill"></i></span>';
    }

    if ((!playstation) && (!xbox) && (!pc) && (!nintendo) && (!apple) && (!meta) && (!psvr2) && (!vr) && (!smartphone)) {
      cadena = cadena + '<span class="badge text-bg-warning" style="margin: 0px 5px 0px 5px;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Varias plataformas"><i class="bi bi-question-square-fill"></i></span>';
    }

    return cadena;
  }

}