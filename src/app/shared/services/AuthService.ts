import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Operator} from '../models/Operator';
import {Backend} from './Backend';
import {Token} from '../models/Token';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class AuthService {
    private ApiURL = Backend.API_URL;

    constructor(private http: HttpClient) { }

    TryGetToken(username: string, password: string): Observable<Token> {
        return <Observable < Token>> this.http.post(this.ApiURL + 'token', {
            'username': username,
            'password': password
        });
    }

    CheckToken(token: string): Observable<Operator> {
        const header = new HttpHeaders();
        header.append('Authorization', 'Bearer ' + token);
        return <Observable<Operator>> this.http.get(this.ApiURL + 'token/check', { headers : this.GetAuthHeader()} );
    }

    GetAuthHeader(): HttpHeaders {
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.ReadLocalToken() });
        return headers;
    }

    ReadLocalToken(): string {
        return sessionStorage.getItem('token');
    }

    WriteLocalToken(token: string) {
        sessionStorage.setItem('token', token);
    }

    RemoveLocalToken() {
        sessionStorage.removeItem('token');
    }

}
