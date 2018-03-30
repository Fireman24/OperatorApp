
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Backend} from './Backend';
import {HttpClient} from '@angular/common/http';
import {FireCar} from '../models/FireCar';
import {AuthService} from './AuthService';

@Injectable()
export class FireCarService {

    constructor(private http: HttpClient,
                private authService: AuthService) { }

    getFireCars(): Observable<FireCar[]> {
        const cars = this.http.get(Backend.API_URL + 'firecar', { headers : this.authService.GetAuthHeader()});
        return <Observable<FireCar [] >> cars;
    }

    getFireCarById( id: number ): Observable< FireCar > {
        return <Observable<FireCar>>this.http.get(`${Backend.API_URL}firecar/${id}`, { headers : this.authService.GetAuthHeader()});
    }

    addFireCar( car: FireCar) {
        return this.http.post(`${Backend.API_URL}firecar`, car, { headers : this.authService.GetAuthHeader()});
    }

    updateFireCar( car: FireCar) {
        return this.http.put(Backend.API_URL + 'firecar/' + car.id, car, { headers : this.authService.GetAuthHeader()});
    }

    deactivateFireCar(id: number)  {
        return this.http.delete(Backend.API_URL + 'firecar/' + id, { headers : this.authService.GetAuthHeader()});
    }

}
