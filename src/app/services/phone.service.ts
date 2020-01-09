import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {baseAPIUrl} from '../Config';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
};

@Injectable({
    providedIn: 'root'
})
export class PhoneService {

    constructor(private http: HttpClient) {
    }

    getPhoneModels(): Observable<string[]> {
        return this.http.get<string[]>(`${baseAPIUrl}phone-models`, {
            headers: httpOptions.headers,
        });
    }
}
