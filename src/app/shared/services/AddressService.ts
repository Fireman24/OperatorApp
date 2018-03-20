
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Backend} from './Backend';
import {HttpClient} from '@angular/common/http';
import {Address} from '../models/Address';

@Injectable()
export class AddressService {

    constructor(private http: HttpClient) { }

    getAddressesStartWith(addressLabel?: string): Observable<Address[]> {
        const addrs = this.http.get(Backend.API_URL + 'address?value=' + addressLabel);
        return <Observable<Address [] >> addrs;
    }

    getAddresses(): Observable<Address[]> {
        const addrs = this.http.get(Backend.API_URL + 'address/');
        return <Observable<Address [] >> addrs;
    }

    getAddressById( id: number ): Observable< Address > {
        return <Observable<Address>>this.http.get(`${Backend.API_URL}address/${id}`);
    }

    deleteAddress(id: number)  {
        return this.http.delete(Backend.API_URL + 'address/' + id);
    }

    addAddress( addrs: Address) {
        return this.http.post(`${Backend.API_URL}address`, addrs);
    }

}
