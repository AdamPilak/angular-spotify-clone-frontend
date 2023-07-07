import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginForm } from './interfaces/loginForm';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginError?: string;
  loginSubscriber?: Subscription;
  loginFormModel: LoginForm = {email: '', password: ''};

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {}

  Login(): void {
    console.log(123)
    this.router.navigate(['/home']);
    // this.loginSubscriber = this.loginService
    //   .Login(this.loginFormModel!.email, this.loginFormModel!.password)
    //   .subscribe(data => {
    //     switch (data.responseId) {
    //       case 40: {
    //         this.loginFormModel.authorizationCode = null;
    //         break;
    //       };
    //       case 50: {
    //         localStorage.setItem('email', data.email!);
    //         localStorage.setItem('token', data.token!);
    //         this.router.navigate(['home']);
    //         break;
    //       }
    //       default: this.setErrorMessage(data.responseId);
    //     }
    //   });
  }

  setErrorMessage(responseId: number): void {
    switch (responseId) {
      case 10:
        this.loginError = 'Nieprawidłowa nazwa uzytkownika lub błędne hasło.';
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
