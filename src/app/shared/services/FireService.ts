
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Backend} from './Backend';
import {HttpClient} from '@angular/common/http';
import {Departure} from '../models/Departure';
import {FireCar} from '../models/FireCar';
import {Image} from '../models/Image';
import {Fire} from '../models/Fire';

@Injectable()
export class FireService {

    constructor(private http: HttpClient) { }

    getFires(all = false): Observable<Fire[]> {
        const fires = this.http.get(Backend.API_URL + 'fire' + (all ? 'all=true' : '' ) );
        return <Observable<Fire [] >> fires;
    }

    getFireById(id: number): Observable<Fire> {
        return <Observable<Fire>> this.http.get(Backend.API_URL + 'fire/' + id);
    }

    addFire(fire: Fire) {
        return this.http.post(Backend.API_URL + 'fire', fire);
    }

    updateFire(fire: Fire) {
        return this.http.put(Backend.API_URL + 'fire/' + fire.id, fire);
    }

    disableFire(id: number) {
        return this.http.delete(Backend.API_URL + 'fire/' + id);
    }

    addFirecar(idFire: number, car: FireCar) {
        return this.http.post(Backend.API_URL + 'fire/' + idFire + '/firecar', car);
    }

    deleteFirecar(idFire: number, car: FireCar) {
        return this.http.delete(Backend.API_URL + 'fire/' + idFire + '/firecar/' + car.id);
    }

    addDocument(idFire: number, fileToUpload: File) {
        const endpoint = Backend.API_URL + 'fire/' + idFire + '/image/';
        const formData: FormData = new FormData();
        formData.append('uploadedFile', fileToUpload, fileToUpload.name);
        return this.http.post(endpoint, formData );
    }

    deleteDocument(idFire: number, image: Image) {
        return this.http.delete(Backend.API_URL + 'fire/' + idFire + '/image/' + image.id);
    }

}
