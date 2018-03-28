import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Departure} from '../../shared/models/Departure';
import {DepartureService} from '../../shared/services/DepartureService';
import * as moment from 'moment';
import {Observable} from 'rxjs/Observable';
import {HistoryRecord} from '../../shared/models/HistoryRecord';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FireCar} from '../../shared/models/FireCar';
import {Image} from '../../shared/models/Image';
import {HttpClient} from '@angular/common/http';
import {Backend} from '../../shared/services/Backend';
import {FireCarService} from '../../shared/services/FireCarService';
import {MapComponent} from '../../shared/modules/map-module/map.component';
import {HydrantService} from '../../shared/services/HydrantService';
import {FireService} from '../../shared/services/FireService';
import {DepartmentService} from '../../shared/services/DepartmentService';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
    selector: 'app-firecar-info',
    templateUrl: './firecar-info.component.html',
    providers: [FireCarService, DepartureService, DepartmentService, HydrantService, FireService]
})
export class FirecarInfoComponent implements OnInit {

    id: number;
    private subscription: Subscription;
    _loading: boolean;
    _firecar: FireCar = new FireCar();
    @ViewChild('map') _map: MapComponent;
    _firecarMarker: L.Marker;
    private _departments: L.Marker[] = [];
    private _departures: L.Marker[] = [];
    private _fires: L.Marker[] = [];
    private _hydrants: L.Marker[] = [];
    public videoUrl: SafeHtml;

    constructor(private _activateRoute: ActivatedRoute,
                private _router: Router,
                private _firecarService: FireCarService,
                private _http: HttpClient,
                private _modalService: NgbModal,
                private _departureService: DepartureService,
                private _departmentService: DepartmentService,
                private _fireService: FireService,
                private _hydrantService: HydrantService,
                private _sanitizer: DomSanitizer) {
        this.subscription = _activateRoute.params.subscribe(params => this.id = params['id']);
    }

    ngOnInit() {
        this.ReloadData();
        this.DrawMarkers();
    }

    public ReloadData() {
        this._loading = true;
        this._firecarService.getFireCarById(this.id).subscribe(data => {
            this._firecar = data;
            if (this._firecarMarker != null) {
                this._map.RemoveMarker(this._firecarMarker);
            }
            if (this._firecar.gpsPoint != null && this._firecar.gpsPoint.lon !== 0) {
                this._firecarMarker = this._map.AddIcon(this._firecar.gpsPoint, 'assets/images/carMapIcon.png');
            }
            if (this._firecar.broadcast != null && this._firecar.broadcast.url.length>0)
            {
                this.videoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this._firecar.broadcast.url);
            }
            this._loading = false;
        });
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

    OpenDocumentButtonClick(doc: Image) {
        const docUrl = Backend.HOST_URL + doc.url;
        window.open(docUrl);
    }
}
