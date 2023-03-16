import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  environmentUrl: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  Login(email: string, password: string): Observable<Object> {
    return this.http.post<Object>(`${this.environmentUrl}/auth/login`, {
      email: email,
      password: password,
    });
  }
}
