import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/components/home/home.component';
import { GotyComponent } from './modules/components/goty/goty.component';
import { PastComponent } from './modules/components/past/past.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'lanzamientos-pasados', component: PastComponent },
  { path: 'game-of-the-year', component: GotyComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: '**', redirectTo: 'home', pathMatch: 'full' }, // Redirige a Home por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
