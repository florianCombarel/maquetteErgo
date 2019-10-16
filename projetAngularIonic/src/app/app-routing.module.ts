import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'home/breakfast', loadChildren: () => import('./breakfast-detail/breakfast-detail.module').then( m => m.BreakfastDetailModule)},
  {
    path: 'home/breakfast/choice/:myid',
    loadChildren: () => import('./choice-breakfast/choice-breakfast.module').then( m => m.ChoiceBreakfastModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 })
export class AppRoutingModule { }
