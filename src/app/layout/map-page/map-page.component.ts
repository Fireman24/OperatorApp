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

@Component({
    selector: 'app-map-page',
    templateUrl: './map-page.component.html',
    providers: [ DepartureService, DepartmentService, HydrantService]
})
export class MapPageComponent implements OnInit {
    @ViewChild('map') _map: MapComponent;

    private _departments: L.Marker[] = [];
    private _departures: L.Marker[] = [];
    private _hydrants: L.Marker[] = [];

    constructor(private _departureService: DepartureService,
                private _departmentService: DepartmentService,
                private _hydrantService: HydrantService) {}

    ngOnInit() {
        this.DrawMarkers();
    }

    DrawMarkers() {
        this._departureService.getDepartures().subscribe(
            data => {
                for (const d of this._departures) {
                    this._map.RemoveMarker(d);
                }
                this._departures = [];
                for (const d of data) {
                    this._departures.push(this._map.AddIcon(d.gpsPoint, 'assets/images/departureMapIcon.png'));
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
                    this._departments.push(this._map.AddIcon(d.gpsPoint, 'assets/images/departmentMapIcon.png'));
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
                    this._hydrants.push(this._map.AddIcon(d.gpsPoint, d.active ? active : inactive));
                }
            }
        );
    }

}
