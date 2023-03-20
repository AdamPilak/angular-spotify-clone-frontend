import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DropdownModule} from 'primeng/dropdown';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/components/register/register.component';
import { RegainAccessComponent } from './login/components/regain-access/regain-access.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './layout/components/home/home.component';
import { NavigationComponent } from './layout/components/navigation/navigation.component';
import { SearchComponent } from './layout/components/search/search.component';
import { FavoriteComponent } from './layout/components/favorite/favorite.component';
import { TrackComponent } from './layout/components/track/track.component';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegainAccessComponent,
    LayoutComponent,
    HomeComponent,
    NavigationComponent,
    SearchComponent,
    FavoriteComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
