import {Component, OnInit, ViewChild} from '@angular/core';
import {DepartmentService} from '../../shared/services/DepartmentService';
import {HydrantService} from '../../shared/services/HydrantService';
import {DepartureService} from '../../shared/services/DepartureService';
import {GpsPoint} from '../../shared/modules/map-module/GpsPoint';
import {MapComponent} from '../../shared/modules/map-module/map.component';
import {Department} from '../../shared/models/Department';
import {Departure} from '../../shared/models/Departure';
import {Hydrant} from '../../shared/models/Hydrant';
import {Observable} from 'rxjs/Observable';
import {forEach} from '@angular/router/src/utils/collection';
import {FireService} from '../../shared/services/FireService';
import {FireCarService} from '../../shared/services/FireCarService';
import {AuthService} from '../../shared/services/AuthService';

@Component({
    selector: 'app-map-page',
    templateUrl: './map-page.component.html',
    providers: [ DepartureService, DepartmentService, HydrantService, FireService, FireCarService]
})
export class MapPageComponent implements OnInit {
    @ViewChild('map') _map: MapComponent;

    private _departments: L.Marker[] = [];
    private _departures: L.Marker[] = [];
    private _firecars: L.Marker[] = [];
    private _fires: L.Marker[] = [];
    private _hydrants: L.Marker[] = [];

    constructor(private _departureService: DepartureService,
                private _departmentService: DepartmentService,
                private _fireService: FireService,
                private _firecarService: FireCarService,
                private _auth: AuthService,
                private _hydrantService: HydrantService) {}

    ngOnInit() {
        this.DrawMarkers();
        this._auth.CheckToken(this._auth.ReadLocalToken()).subscribe(data => {
            this._map.SetViewCenter(data.geoZone);
        })
    }

    DrawMarkers() {
        this._departureService.getDepartures().subscribe(
            data => {
                for (const d of this._departures) {
                    this._map.RemoveMarker(d);
                }
                this._departures = [];
                for (const d of data) {
                    const marker = this._map.AddIcon(d.gpsPoint, 'assets/images/departureMapIcon.png');
                    marker.bindPopup("<p>"+ d.address + "</p><p>"+d.intent+ "</p><p>" + d.comments+"</p>");
                    this._departures.push(marker);
                }
            }
        );
        this._firecarService.getFireCars().subscribe(
            data => {
                for (const d of this._firecars) {
                    this._map.RemoveMarker(d);
                }
                this._firecars = [];
                for (const d of data) {
                    const marker = this._map.AddIcon(d.gpsPoint, 'assets/images/firecarMapIcon.png');
                    marker.bindPopup("<p>"+ d.name + "</p><p>"+d.specialization+ "</p><p>" + d.num+"</p>");
                    this._firecars.push(marker);
                }
            }
        );
        this._fireService.getFires().subscribe(
            data => {
                for (const d of this._fires) {
                    this._map.RemoveMarker(d);
                }
                this._fires = [];
                for (const d of data) {
                    const marker = this._map.AddIcon(d.gpsPoint, 'assets/images/fireMapIcon.png');
                    marker.bindPopup("<p>"+ d.address + "</p><p>"+d.department.name+ "</p><p>" + d.comments
                        + "</p><p>R:" + d.rank+"</p>");
                    this._fires.push(marker);
                }
            }
        );
        this._departmentService.getDepartments().subscribe(
            data => {
                for (const d of this._departments) {
                    this._map.RemoveMarker(d);
                }
                this._departments = [];
                for (const d of data) {
                    const marker = this._map.AddIcon(d.gpsPoint, 'assets/images/departmentMapIcon.png');
                    marker.bindPopup("<p>"+ d.name + "</p><p>"+d.address+ "</p>");
                    this._departments.push(marker);
                }
            }
        );
        this._hydrantService.getHydrants().subscribe(
            data => {
                for (const d of this._hydrants) {
                    this._map.RemoveMarker(d);
                }
                this._hydrants = [];
                for (const d of data) {
                    const active = 'assets/images/hydrantMapActive.png';
                    const inactive = 'assets/images/hydrantMapInactive.png';
                    const marker = this._map.AddIcon(d.gpsPoint, d.active ? active : inactive);
                    marker.bindPopup("<p>"+ d.waterType + "</p><p>"+d.description+ "</p><p>" + d.responsible
                        + "</p><p>" + d.revisionDate+"</p>");
                    this._hydrants.push(marker);
                }
            }
        );
    }

}
