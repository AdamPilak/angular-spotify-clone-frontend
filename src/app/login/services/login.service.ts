import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../interfaces/loginResponse';
import { environmentUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  Login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environmentUrl}/auth/login`, {
      email: email,
      password: password,
    });
  }
}
