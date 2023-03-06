import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth/auth.guard';
import { LoggedUserGuard } from './guard/login/logged-user.guard';
import { FavoriteComponent } from './layout/components/favorite/favorite.component';
import { HomeComponent } from './layout/components/home/home.component';
import { SearchComponent } from './layout/components/search/search.component';
import { TrackComponent } from './layout/components/track/track.component';
import { LayoutComponent } from './layout/layout.component';
import { RegainAccessComponent } from './login/components/regain-access/regain-access.component';
import { RegisterComponent } from './login/components/register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },
  
  { path: 'login', component: LoginComponent, canActivate: [LoggedUserGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [LoggedUserGuard]},
  { path: 'regain-access', component: RegainAccessComponent, canActivate: [LoggedUserGuard]},
  { path: 'dashboard', redirectTo: 'dashboard/home' }, 
  { 
    path: 'dashboard', 
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent,},
      { path: 'search', component: SearchComponent, },
      { path: 'favorite', component: FavoriteComponent,},
      { path: 'track', component: TrackComponent, },
  ] 
 }
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
