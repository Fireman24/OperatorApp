
import {Injectable} from '@angular/core';
import {Department} from '../models/Department';
import {Observable} from 'rxjs/Observable';
import {Backend} from './Backend';
import {HttpClient} from '@angular/common/http';
import {Hydrant} from '../models/Hydrant';

@Injectable()
export class HydrantService {

    constructor(private http: HttpClient) { }

    getHydrants(): Observable<Hydrant[]> {
        const hydrants = this.http.get(Backend.URL + 'hydrant');
        return <Observable<Hydrant [] >> hydrants;
    }

    getHydrantById( id: number ): Observable< Hydrant > {
        return <Observable<Hydrant>>this.http.get(`${Backend.URL}hydrant/${id}`);
    }

    addHydrant( hyd: Hydrant) {
        return this.http.post(`${Backend.URL}hydrant`, hyd);
    }


    updateHydrant( hyd: Hydrant) {
        return this.http.put(Backend.URL + 'hydrant/' + hyd.id, hyd);
    }

    deleteHydrant(id: number)  {
        return this.http.delete(Backend.URL + 'hydrant/' + id);
    }

}
