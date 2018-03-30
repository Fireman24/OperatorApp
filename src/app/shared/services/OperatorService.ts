import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Operator} from '../models/Operator';
import {Backend} from './Backend';
import {Token} from '../models/Token';
import {AuthService} from './AuthService';

@Injectable()
export class OperatorService {
    private ApiURL = Backend.API_URL;

    constructor(private http: HttpClient,
                private authService: AuthService) { }

    getOperators(): Observable<Operator[]> {
        const ops = this.http.get(this.ApiURL + 'operator', { headers : this.authService.GetAuthHeader()});
        return <Observable < Operator [] >> ops;
    }

    addOperator(op: Operator) {
        return this.http.post(this.ApiURL + 'operator', op, { headers : this.authService.GetAuthHeader()});
    }

    deactivateOperator(id: number) {
        return this.http.delete(this.ApiURL + 'operator/' + id, { headers : this.authService.GetAuthHeader()});
    }


}
