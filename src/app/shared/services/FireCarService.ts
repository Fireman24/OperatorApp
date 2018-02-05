
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Backend} from './Backend';
import {HttpClient} from '@angular/common/http';
import {FireCar} from '../models/FireCar';

@Injectable()
export class FireCarService {

    constructor(private http: HttpClient) { }

    getFireCars(): Observable<FireCar[]> {
        const cars = this.http.get(Backend.URL + 'firecar');
        return <Observable<FireCar [] >> cars;
    }

    getFireCarById( id: number ): Observable< FireCar > {
        return <Observable<FireCar>>this.http.get(`${Backend.URL}firecar/${id}`);
    }

    addFireCar( car: FireCar) {
        return this.http.post(`${Backend.URL}firecar`, car);
    }

    updateFireCar( car: FireCar) {
        return this.http.put(Backend.URL + 'firecar/' + car.id, car);
    }

    deactivateFireCar(id: number)  {
        return this.http.delete(Backend.URL + 'firecar/' + id);
    }

}
