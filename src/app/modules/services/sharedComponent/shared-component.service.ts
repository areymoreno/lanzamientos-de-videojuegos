import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedComponentService {

  private myElement: HTMLElement | null = null;

  setElement(element: HTMLElement) {
    this.myElement = element;
  }

  getElement(): HTMLElement | null {
    return this.myElement;
  }
}
