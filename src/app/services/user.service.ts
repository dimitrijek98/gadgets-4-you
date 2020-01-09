import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseAPIUrl } from '../Config';
import { User } from '../models/User';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loginUser(email: string, password: string): Observable<any> {
    const codecPass = btoa(password);
    return this.http.post(`${baseAPIUrl}login`, JSON.stringify({ email, password: codecPass}), httpOptions);
  }

  registerUser(user: User): Observable<any> {
    return this.http.post(`${baseAPIUrl}register`, JSON.stringify(user), httpOptions);
  }
  updateUser(user: User): Observable<any> {
    return this.http.post(`${baseAPIUrl}update`, JSON.stringify(user), httpOptions);
  }
}
