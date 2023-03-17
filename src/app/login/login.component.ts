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
        if (data.responseId === 40) {
          localStorage.setItem('email', data.email!);
          localStorage.setItem('token', data.token!);
          this.router.navigate(['home']);
        } else {
          this.setErrorMessage(data.responseId);
        }
      });
  }

  setErrorMessage(responseId: number): void {
    switch (responseId) {
      case 10:
        this.loginError = 'Niepoprawny email lub hasło';
        break;
      case 20:
        this.loginError = 'Uzytkownik zablokowany tymczasowo';
        break;
      case 30:
        this.loginError = 'Uzytkownik zablokowany na stałe';
    }
  }

  ngOnDestroy(): void {
    this.loginSubscriber?.unsubscribe();
  }
}
