import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../models/Product';
import {baseAPIUrl} from '../Config';
import {Phone} from '../models/Phone';

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

    constructor(private http: HttpClient) {
    }

    getAllProducts(phoneType: Phone): Observable<Product[]> {
        return this.http.get<Product[]>(`${baseAPIUrl}products-for-me`, {
            headers: httpOptions.headers,
            params: {phoneType: JSON.stringify(phoneType)}
        });
    }

    getCategory(category: string): Observable<Product[]> {
        return this.http.get<Product[]>(`${baseAPIUrl}Category`, {
            headers: httpOptions.headers,
            params: {category}
        });
    }

}
