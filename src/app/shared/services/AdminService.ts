import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Operator} from '../models/Operator';

@Injectable()
export class AdminService {
    private ApiURL = 'http://api.fire24.kz/api2/';
    // private ApiURL = 'http://localhost:61196/api2/';

    constructor(private http: HttpClient) { }

    getOperators(): Observable<Operator[]> {
        const ops = this.http.get(this.ApiURL + 'operator');
        return <Observable < Operator [] >> ops;
    }

    addOperator(op: Operator) {
        return this.http.post(this.ApiURL + 'operator', op);
    }

    deactivateOperator(id: number) {
        return this.http.delete(this.ApiURL + 'operator/' + id);
    }
}
