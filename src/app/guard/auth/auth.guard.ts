import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // const emailFromStorage = localStorage.getItem('email');
    // const tokenFromStorage = localStorage.getItem('token');

    // if (emailFromStorage && tokenFromStorage) {
    //   return this.authService
    //     .checkIfTokenExists(emailFromStorage, tokenFromStorage)
    //     .pipe(
    //       map(isTokenValid => {
    //         if (!isTokenValid) {
    //           localStorage.clear();
    //           return this.router.navigate(['/login']);
    //         }
    //         return isTokenValid;
    //       })
    //     );
    // }
    // localStorage.clear();
    // this.router.navigate(['login']);
    // return false;
    return true;
  }
}
