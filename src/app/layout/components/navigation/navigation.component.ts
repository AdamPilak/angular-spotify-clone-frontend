import { Component, OnInit } from '@angular/core';
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
export class NavigationComponent implements OnInit {
  isSidebarExpanded: boolean = false;
  actualPage: string = '';
  routeParamsSubscription?: Subscription;

  constructor(public router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.actualPage = this.router.routerState.snapshot.url;

    this.router.events
    .pipe(filter(event => event instanceof NavigationStart))
    .subscribe(event => {
      this.actualPage = (event as NavigationStart).url;
    });
  }

  logOut(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }


}
