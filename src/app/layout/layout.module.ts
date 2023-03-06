import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FavoriteComponent } from './components/favorite/favorite.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'favorite', component: FavoriteComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule  ]
})
export class LayoutModule { }
