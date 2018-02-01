import {ILatLng} from './latLng.interface';
import {LatLng, LatLngBounds} from 'leaflet';

export class Location implements ILatLng {
    latitude: number;
    longitude: number;
    address: string;
    viewBounds: LatLngBounds;



    readData(addr: string, lat: number, lon: number, viewBnds: LatLngBounds) {
        this.latitude = lat;
        this.address = addr;
        this.longitude = lon;
        this.viewBounds = viewBnds;
    }

    constructor() { }
}
