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
    return this.http.post(`${baseAPIUrl}Login`, JSON.stringify({ email, password}), httpOptions);
  }

  registerUser(user: User): Observable<any> {
    return this.http.post(`${baseAPIUrl}Register`, JSON.stringify(user), httpOptions);
  }
}
