import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environmentUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  checkIfTokenExists(userId: string, token: string): Observable<any> {
    return this.http.post(`${environmentUrl}/auth/checkToken`, {'userId': userId, 'token': token});
  }

  
}
