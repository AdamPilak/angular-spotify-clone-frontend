import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environmentUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  checkIfTokenExists(email: string, token: string): Observable<any> {
    return this.http.post(`${environmentUrl}/auth/checkToken`, {'email': email, 'token': token});
  }

  deleteToken(email: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        email: email
      },
    };
    return this.http.delete(`${environmentUrl}/auth/logout`, options);
  }
}
