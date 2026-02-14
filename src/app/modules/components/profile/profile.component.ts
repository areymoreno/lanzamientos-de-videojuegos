import { Component, inject, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils/utils';
import { StorageService } from '../../services/endpoints/storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})

export class ProfileComponent implements OnInit {
  
  private endpoints: StorageService = inject(StorageService);
  private utils: Utils = inject(Utils);

  public noFavorites: boolean = false;
  
  session: any[] = JSON.parse(localStorage.getItem('favoritos') || '[]');
  gameFavorites = "gameFavorites";
  private subscription?: Subscription;

  constructor() { }

  ngOnInit(): void {
    if (this.session.length > 0) {
      this.subscription = this.endpoints.getFavorites(this.session, this.gameFavorites).subscribe({
        next: (data) => {
        }
      });
    } else {
      this.noFavorites = true;
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
