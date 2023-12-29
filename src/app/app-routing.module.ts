import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GotyComponent } from './modules/components/goty/goty.component';
import { PastComponent } from './modules/components/past/past.component';

const routes: Routes = [
  {
    path: 'goty',
    component: GotyComponent
  }, 
  {
    path: 'pastReleases',
    component: PastComponent
  }, 
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
