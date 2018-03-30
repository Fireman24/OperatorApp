
import {Injectable} from '@angular/core';
import {Department} from '../models/Department';
import {Observable} from 'rxjs/Observable';
import {Backend} from './Backend';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './AuthService';

@Injectable()
export class DepartmentService {

    constructor(private http: HttpClient,
                private authService: AuthService) { }

    getDepartments(): Observable<Department[]> {
        const deps = this.http.get(Backend.API_URL + 'department', { headers : this.authService.GetAuthHeader()});
        return <Observable<Department [] >> deps;
    }

    getDepartmentById( id: number ): Observable< Department > {
        return <Observable<Department>>this.http.get(`${Backend.API_URL}department/${id}`, { headers : this.authService.GetAuthHeader()});
    }

    addDepartment( dep: Department) {
        return this.http.post(`${Backend.API_URL}department`, dep, { headers : this.authService.GetAuthHeader()});
    }

    deactivateDepartment(id: number)  {
        return this.http.delete(Backend.API_URL + 'department/' + id, { headers : this.authService.GetAuthHeader()});
    }

    updateDepartment( dep: Department) {
        return this.http.put(Backend.API_URL + 'department/' + dep.id, dep, { headers : this.authService.GetAuthHeader()});
    }
}
