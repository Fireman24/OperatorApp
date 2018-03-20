
import {Injectable} from '@angular/core';
import {Department} from '../models/Department';
import {Observable} from 'rxjs/Observable';
import {Backend} from './Backend';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DepartmentService {

    constructor(private http: HttpClient) { }

    getDepartments(): Observable<Department[]> {
        const deps = this.http.get(Backend.API_URL + 'department');
        return <Observable<Department [] >> deps;
    }

    getDepartmentById( id: number ): Observable< Department > {
        return <Observable<Department>>this.http.get(`${Backend.API_URL}department/${id}`);
    }

    addDepartment( dep: Department) {
        return this.http.post(`${Backend.API_URL}department`, dep);
    }

    deactivateDepartment(id: number)  {
        return this.http.delete(Backend.API_URL + 'department/' + id);
    }

    updateDepartment( dep: Department) {
        return this.http.put(Backend.API_URL + 'department/' + dep.id, dep);
    }
}
