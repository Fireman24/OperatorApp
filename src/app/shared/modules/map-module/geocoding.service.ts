import {Location} from './location.class';
import {Injectable} from '@angular/core';
import * as L from 'leaflet';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GeocodingService {
    http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    geocode(address: string) {

        return this.http.get('http://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address))
            .map(data => {
                const locations = data['results'];
                return locations.map(function (loc: any) {
                    const viewPort = loc.geometry.viewport;
                    const location = new Location();
                    location.readData( loc.formatted_address, loc.geometry.location.lat, loc.geometry.location.lng, L.latLngBounds(
                        {
                            lat: viewPort.southwest.lat,
                            lng: viewPort.southwest.lng},
                        {
                            lat: viewPort.northeast.lat,
                            lng: viewPort.northeast.lng
                        }));
                    return location;
                });
            });
    }

    getCurrentLocation() {
        return this.http.get('http://ipv4.myexternalip.com/json')
            .map(data => {
                return data['ip'];
            })
            .flatMap(ip => this.http.get('http://freegeoip.net/json/' + ip))
            .map(res => {
                const location = new Location();
                location.address = res['city'] + ', ' + res['region_code'] + ' ' + res['zip_code'] + ', ' + res['country_code'];
                location.latitude = res['latitude'];
                location.longitude = res['longitude'];
                return location;
            });
    }
}
