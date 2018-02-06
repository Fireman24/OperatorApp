
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Backend} from './Backend';
import {HttpClient} from '@angular/common/http';
import {Departure} from '../models/Departure';
import {FireCar} from '../models/FireCar';

@Injectable()
export class DepartureService {

    constructor(private http: HttpClient) { }

    getDepartures(all = false): Observable<Departure[]> {
        const deps = this.http.get(Backend.URL + 'departure' + (all ? 'all=true' : '' ) );
        return <Observable<Departure [] >> deps;
    }

    getDepartureById(id: number): Observable<Departure> {
        return <Observable<Departure>> this.http.get(Backend.URL + 'departure/' + id);
    }

    addDeparture(dep: Departure) {
        return this.http.post(Backend.URL + 'departure', dep);
    }

    updateDeparture(dep: Departure) {
        return this.http.put(Backend.URL + 'departure/' + dep.id, dep);
    }

    disableDeparture(id: number) {
        return this.http.delete(Backend.URL + 'departure/' + id);
    }

    addFirecar(idDeparture: number, car: FireCar) {
        return this.http.post(Backend.URL + 'departure/' + idDeparture + '/firecar', car);
    }

}
