import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { AuthService } from 'src/app/guard/auth/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  isSidebarExpanded: boolean = false;
  actualPage: string = '';
  routeParamsSubscription?: Subscription;
  deleteTokenSubscription?: Subscription;

  constructor(public router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.actualPage = this.router.routerState.snapshot.url;

    this.routeParamsSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(event => {
        this.actualPage = (event as NavigationStart).url;
      });
  }

  logOut(): void {
    const email = localStorage.getItem('email');
    if (email) {
      this.deleteTokenSubscription = this.authService
        .deleteToken(email)
        .subscribe(() => {
          this.deleteTokenSubscription?.unsubscribe();
        });
    }
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription?.unsubscribe();
  }
}
