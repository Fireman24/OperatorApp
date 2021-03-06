import {AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {icon, latLng, LatLng, Layer, marker, tileLayer} from 'leaflet';

import {GeocodingService} from './geocoding.service';
import {MapService} from './map.service';
import * as L from 'leaflet';
import { GpsPoint} from './GpsPoint';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html'
})

export class MapComponent  implements  OnInit, OnDestroy {

    map: L.Map;
    markers: L.Marker[] = [];
    public MapReady = false;


    @Output()
    public OnReady: EventEmitter<any> = new EventEmitter();


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

    AddIcon(point: GpsPoint, imageUrl: string): L.Marker {
        const mk = L.marker([point.lat, point.lon], {
            icon: L.icon({
                iconUrl: (imageUrl),
                iconSize: [30, 30]
            }),
            draggable: false
        });
        mk.addTo(this.mapService.map);
        /* .bindPopup('Marker #', {
             offset: L.point(12, 6)
         })
         .addTo(this.mapService.map)
         .openPopup(); */
        return mk;
    }

    AddIconWithPopup(point: GpsPoint, imageUrl: string, popupText: string): L.Marker {
        const mk = L.marker([point.lat, point.lon], {
            icon: L.icon({
                iconUrl: (imageUrl),
                iconSize: [30, 30]
            }),
            draggable: false
        }).bindPopup(popupText);
        mk.addTo(this.mapService.map);
        /* .bindPopup('Marker #', {
             offset: L.point(12, 6)
         })
         .addTo(this.mapService.map)
         .openPopup(); */
        return mk;
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

    ngOnInit(): void {
        this.map = L.map('map', {
            zoomControl: false,
            center: L.latLng(51.16052269999999, 71.4703558),
            zoom: 12,
            minZoom: 4,
            maxZoom: 19,
            layers: [this.mapService.baseMaps.OpenStreetMap]
        });

        L.control.zoom({ position: 'topright' }).addTo(this.map);
        L.control.layers(this.mapService.baseMaps).addTo(this.map);
        L.control.scale().addTo(this.map);

        this.mapService.map = this.map;
        this.map.whenReady(() => {
            this.MapReady = true;
            this.OnReady.next(null);

        });
    }

    GoToMyLocation() {
        this.geocoder.getCurrentLocation()
            .subscribe(
                location => this.map.panTo([location.latitude, location.longitude]),
                err => console.error(err)
            );
    }

    ngOnDestroy(): void {
        this.map.remove();
    }

    SetViewCenter(point: GpsPoint) {
        this.map.panTo([point.lat,point.lon]);
    }
}
