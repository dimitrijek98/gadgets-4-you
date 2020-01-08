import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/Product';
import { baseAPIUrl } from '../Config';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseAPIUrl}AllProducts`);
  }

  getCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseAPIUrl}Category`, {
      headers: httpOptions.headers,
      params: {category}
    });
  }

}
