import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  Login(email: string, password: string): Observable<Object> {
    return this.http.post('localhost:8000/auth/login', {
      email: email,
      password: password,
    });
  }
}
