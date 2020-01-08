import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseAPIUrl } from '../Config';
import { Card } from '../models/Card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  pay(card: Card): Observable<any> {
    return this.http.put(`${baseAPIUrl}Pay`, card);
  }

}
