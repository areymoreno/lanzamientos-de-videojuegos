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
    let mobile = 0;
    let android = 0;
    let mac = 0;
    let iOS = 0;
    let vr = 0;
    let evercade = 0;

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
          mac++;
          break;
        case 39:
          iOS++;
          break;
        case 34:
          android++;
          break;
        case 386:
          vr++;
          break;
        case 471:
          vr++;
          break;
        case 386:
          vr++;
          break;
        case 163:
          vr++;
          break;
        case 309:
          evercade++;
          break;
        case 55:
          mobile++;
          break;
      }
    });

    return this.postPlatforms(playstation, xbox, nintendo, pc, mobile, android, iOS, mac, vr, evercade);
  }

  postPlatforms(playstation: number, xbox: number, nintendo: number, pc: number, mobile: number, android: number, iOS: number, mac: number, vr: number, evercade: number) {
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

    if (mac) {
      cadena = cadena + '<span class="badge text-bg-dark" style="margin: 0px 5px 0px 5px;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Apple"><i class="bi bi-apple" ></i></span>';
    }

    if (vr) {
      cadena = cadena + '<span class="badge text-bg-vr" style="margin: 0px 5px 0px 5px;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="VR"><i class="bi bi-badge-vr-fill"></i></span>';
    }

    if (mobile) {
      cadena = cadena + '<span class="badge text-bg-info" style="margin: 0px 5px 0px 5px;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Dispositivos móviles antiguos"><i class="bi bi-calculator"></i></span>';
    }

    if (android) {
      cadena = cadena + '<span class="badge text-bg-android" style="margin: 0px 5px 0px 5px;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Android"><i class="bi bi-android2"></i></span>';
    }

    if (iOS) {
      cadena = cadena + '<span class="badge text-bg-iphone" style="margin: 0px 5px 0px 5px;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="iPhone"><i class="bi bi-phone"></i></span>';
    }

    if (evercade) {
      cadena = cadena + '<span class="badge text-bg-evercade" style="margin: 0px 5px 0px 5px;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Evercade">EC</span>';
    }

    if ((!playstation) && (!xbox) && (!pc) && (!nintendo) && (!mobile) && (!mac) && (!vr) && (!evercade)) {
      cadena = cadena + '<span class="badge text-bg-warning" style="margin: 0px 5px 0px 5px;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Varias plataformas"><i class="bi bi-question-square-fill"></i></span>';
    }

    return cadena;
  }

}