
import {Injectable} from '@angular/core';
import {Department} from '../models/Department';
import {Observable} from 'rxjs/Observable';
import {Backend} from './Backend';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DepartmentService {

    constructor(private http: HttpClient) { }

    getDepartments(): Observable<Department[]> {
        const deps = this.http.get(Backend.URL + 'department');
        return <Observable<Department [] >> deps;
    }

    getDepartmentById( id: number ): Observable< Department > {
        return <Observable<Department>>this.http.get(`${Backend.URL}department/${id}`);
    }

    addDepartment( dep: Department) {
        return this.http.post(`${Backend.URL}department`, dep);
    }

    deactivateDepartment(id: number)  {
        return this.http.delete(Backend.URL + 'department/' + id);
    }

    updateDepartment( dep: Department) {
        return this.http.put(Backend.URL + 'department/' + dep.id, dep);
    }
}
