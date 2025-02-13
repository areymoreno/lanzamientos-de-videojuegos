import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/components/home/home.component';
import { PastComponent } from './modules/components/past/past.component';
import { ProfileComponent } from './modules/components/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'past', component: PastComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }, 
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirige a Home por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
