import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from '../interfaces/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  BASE_URL : string = 'https://back.test.kimsabot.com';

  loginUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.BASE_URL}/auth/login`, user);
  }

}
