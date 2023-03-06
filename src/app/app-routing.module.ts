import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FavoriteComponent } from './layout/components/favorite/favorite.component';
import { HomeComponent } from './layout/components/home/home.component';
import { SearchComponent } from './layout/components/search/search.component';
import { TrackComponent } from './layout/components/track/track.component';
import { RegainAccessComponent } from './login/components/regain-access/regain-access.component';
import { RegisterComponent } from './login/components/register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'regain-access', component: RegainAccessComponent },

  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'favorite', component: FavoriteComponent, canActivate: [AuthGuard],
    children: [
      {path: 'track', component: TrackComponent}
    ] 
  }, 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
