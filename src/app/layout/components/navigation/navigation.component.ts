import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ChildActivationStart,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  isSidebarExpanded: boolean = false;
  actualPage: string = '';
  routeParamsSubscription?: Subscription;

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.actualPage = this.router.routerState.snapshot.url;

    this.routeParamsSubscription = this.router.events
    .pipe(filter(event => event instanceof NavigationStart))
    .subscribe(event => {
      this.actualPage = (event as NavigationStart).url;
    });
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription?.unsubscribe();
  }

  logOut(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }


}
