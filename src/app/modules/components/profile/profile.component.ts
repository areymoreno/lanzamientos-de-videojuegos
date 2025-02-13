import { Component, inject } from '@angular/core';
import { Utils } from 'src/app/utils/utils';
import { StorageService } from '../../services/endpoints/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../../../../../src/app/app.component.scss']
})
export class ProfileComponent {

  private endpoints: StorageService = inject(StorageService);
  private utils: Utils = inject(Utils);

  session: any[] = JSON.parse(localStorage.getItem('favoritos') || '[]');
  gameFavorites = "gameFavorites";
  
  constructor () {
  }

  async ngOnInit(): Promise<void> {
    console.log(this.session);
    this.endpoints.getFavorites(this.session, this.gameFavorites);
  }

}
