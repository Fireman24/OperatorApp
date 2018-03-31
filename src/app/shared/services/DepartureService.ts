
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Backend} from './Backend';
import {HttpClient} from '@angular/common/http';
import {Departure} from '../models/Departure';
import {FireCar} from '../models/FireCar';
import {Image} from '../models/Image';
import {AuthService} from './AuthService';

@Injectable()
export class DepartureService {

    constructor(private http: HttpClient,
                private authService: AuthService) { }

    getDepartures(all = false): Observable<Departure[]> {
        const deps = this.http.get(Backend.API_URL + 'departure' + (all ? '?all=true' : '' ) , { headers : this.authService.GetAuthHeader()});
        return <Observable<Departure [] >> deps;
    }

    getDepartureById(id: number): Observable<Departure> {
        return <Observable<Departure>> this.http.get(Backend.API_URL + 'departure/' + id, { headers : this.authService.GetAuthHeader()});
    }

    addDeparture(dep: Departure) {

        return this.http.post(Backend.API_URL + 'departure', dep, { headers : this.authService.GetAuthHeader()});
    }

    updateDeparture(dep: Departure) {
        return this.http.put(Backend.API_URL + 'departure/' + dep.id, dep, { headers : this.authService.GetAuthHeader()});
    }

    disableDeparture(id: number) {
        return this.http.delete(Backend.API_URL + 'departure/' + id, { headers : this.authService.GetAuthHeader()});
    }

    addFirecar(idDeparture: number, car: FireCar) {
        return this.http.post(Backend.API_URL + 'departure/' + idDeparture + '/firecar', car, { headers : this.authService.GetAuthHeader()});
    }

    deleteFirecar(idDeparture: number, car: FireCar) {
        return this.http.delete(Backend.API_URL + 'departure/' + idDeparture + '/firecar/' + car.id,{ headers : this.authService.GetAuthHeader()});
    }

    addDocument(idDeparture: number, fileToUpload: File) {
        const endpoint = Backend.API_URL + 'departure/' + idDeparture + '/image/';
        const formData: FormData = new FormData();
        formData.append('uploadedFile', fileToUpload, fileToUpload.name);
        return this.http.post(endpoint, formData , { headers : this.authService.GetAuthHeader()});
    }

    deleteDocument(idDeparture: number, image: Image) {
        return this.http.delete(Backend.API_URL + 'departure/' + idDeparture + '/image/' + image.id, { headers : this.authService.GetAuthHeader()});
    }

}
