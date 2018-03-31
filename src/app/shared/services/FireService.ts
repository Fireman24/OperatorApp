
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Backend} from './Backend';
import {HttpClient} from '@angular/common/http';
import {Departure} from '../models/Departure';
import {FireCar} from '../models/FireCar';
import {Image} from '../models/Image';
import {Fire} from '../models/Fire';
import {AuthService} from './AuthService';

@Injectable()
export class FireService {

    constructor(private http: HttpClient,
                private authService: AuthService) { }

    getFires(all = false): Observable<Fire[]> {
        const fires = this.http.get(Backend.API_URL + 'fire' + (all ? '?all=true' : '' ) , { headers : this.authService.GetAuthHeader()});
        return <Observable<Fire [] >> fires;
    }

    getFireById(id: number): Observable<Fire> {
        return <Observable<Fire>> this.http.get(Backend.API_URL + 'fire/' + id, { headers : this.authService.GetAuthHeader()});
    }

    addFire(fire: Fire) {
        return this.http.post(Backend.API_URL + 'fire', fire,{ headers : this.authService.GetAuthHeader()});
    }

    updateFire(fire: Fire) {
        return this.http.put(Backend.API_URL + 'fire/' + fire.id, fire,{ headers : this.authService.GetAuthHeader()});
    }

    disableFire(id: number) {
        return this.http.delete(Backend.API_URL + 'fire/' + id,{ headers : this.authService.GetAuthHeader()});
    }

    addFirecar(idFire: number, car: FireCar) {
        return this.http.post(Backend.API_URL + 'fire/' + idFire + '/firecar', car, { headers : this.authService.GetAuthHeader()});
    }

    deleteFirecar(idFire: number, car: FireCar) {
        return this.http.delete(Backend.API_URL + 'fire/' + idFire + '/firecar/' + car.id,{ headers : this.authService.GetAuthHeader()});
    }

    addDocument(idFire: number, fileToUpload: File) {
        const endpoint = Backend.API_URL + 'fire/' + idFire + '/image/';
        const formData: FormData = new FormData();
        formData.append('uploadedFile', fileToUpload, fileToUpload.name);
        return this.http.post(endpoint, formData ,{ headers : this.authService.GetAuthHeader()});
    }

    deleteDocument(idFire: number, image: Image) {
        return this.http.delete(Backend.API_URL + 'fire/' + idFire + '/image/' + image.id,{ headers : this.authService.GetAuthHeader()});
    }

}
