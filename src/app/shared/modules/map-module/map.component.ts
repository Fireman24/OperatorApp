import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {icon, latLng, LatLng, Layer, marker, tileLayer} from 'leaflet';

import {GeocodingService} from './geocoding.service';
import {MapService} from './map.service';
import * as L from 'leaflet';
import { GpsPoint} from './GpsPoint';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html'
})

export class MapComponent  implements AfterViewInit, OnDestroy {

    map: L.Map;
    markers: L.Marker[] = [];

    constructor(private mapService: MapService, private geocoder: GeocodingService) {
    }

    AddMarker( point: GpsPoint) {
        const mk = L.marker([point.lat, point.lon], {
            icon: L.icon({
                iconUrl: ('assets/images/mapMarker.png'),
                iconSize: [45, 60]
            }),
            draggable: true
        });
        mk.addTo(this.mapService.map);
           /* .bindPopup('Marker #', {
                offset: L.point(12, 6)
            })
            .addTo(this.mapService.map)
            .openPopup(); */
        this.markers.push(mk);
    }

    GetCenterLtLn(): GpsPoint {
        const point = new GpsPoint();
        const center = this.map.getCenter();
        point.lat = center.lat;
        point.lon = center.lng;
        return point;
    }

    RemoveMarker(m: L.Marker) {
        this.map.removeLayer(m);
        const index = this.markers.indexOf(m);
        delete this.markers[index];
    }

    RemoveAllMarkers() {
        for (const m of this.markers) {
            this.map.removeLayer(m);
        }
        this.markers = [];
    }

    ngAfterViewInit(): void {
        this.map = L.map('map', {
            zoomControl: false,
            center: L.latLng(40.731253, -73.996139),
            zoom: 12,
            minZoom: 4,
            maxZoom: 19,
            layers: [this.mapService.baseMaps.OpenStreetMap]
        });

        L.control.zoom({ position: 'topright' }).addTo(this.map);
        L.control.layers(this.mapService.baseMaps).addTo(this.map);
        L.control.scale().addTo(this.map);

        this.mapService.map = this.map;
        this.geocoder.getCurrentLocation()
            .subscribe(
                location => this.map.panTo([location.latitude, location.longitude]),
                err => console.error(err)
            );
    }

    ngOnDestroy(): void {
        this.map.remove();
    }
}
