import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginError?: string;
  loginSubscriber?: Subscription;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {}

  Login(email: string, password: string): void {
    this.loginSubscriber = this.loginService
      .Login(email, password)
      .subscribe(data => {
        if (data.toString() === 'Poprawne logowanie') {
          localStorage.setItem('user', 'user');
          this.router.navigate(['home']);
        } else {
          this.loginError = data.toString();
        }
      });
  }

  ngOnDestroy(): void {
    this.loginSubscriber?.unsubscribe();
  }
}
