import {
    AfterViewInit,
    Component, EventEmitter, Injectable, Input, OnInit, Output, QueryList, ViewChild
} from '@angular/core';
import {NgbActiveModal, NgbDateAdapter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {MapComponent} from '../../../shared/modules/map-module/map.component';
import {GpsPoint} from '../../../shared/modules/map-module/GpsPoint';
import {HydrantService} from '../../../shared/services/HydrantService';
import {Hydrant} from '../../../shared/models/Hydrant';
import {NgbDateNativeAdapter} from '../../../shared/adapters/NgbDateNativeAdapter';
import {StringDateProvider} from '../../../shared/providers/StringDateProvider';

@Component({
    selector: 'app-hydrant-form',
    templateUrl: './hydrant-form.component.html',
    providers: [ HydrantService, StringDateProvider]
})
export class HydrantFormComponent implements AfterViewInit, OnInit {

    revisionDateModel: Date;

    private _hydrant: Hydrant = new Hydrant();

    @ViewChild('content') content: any;
    @ViewChild('map') map: MapComponent;

    private _editMode = false;

    @Output()
    public OnClose: EventEmitter<any> = new EventEmitter();

    @Output()
    public AfterViewInit: EventEmitter<any> = new EventEmitter();

    @Output()
    public OnInit: EventEmitter<any> = new EventEmitter();



    constructor(private modalService: NgbActiveModal, private hydrantService: HydrantService) { }

    ngAfterViewInit(): void {
        this.AfterViewInit.next(null);
    }

    ngOnInit(): void {
        this.OnInit.next(null);
    }

    set Hydrant(value) {
        if (value == null) {
            return;
        }
        this._hydrant = value;
        // Если карта готова - рисует, если нет, то подписываемся на карту.
        if (this.map.MapReady) {
            this.DrawHydrantMarker();
        } else {
            this.map.OnReady.subscribe(e => {
                this.DrawHydrantMarker();
            });
        }
        this.OnInit.subscribe(e => {
            this.revisionDateModel = new Date(this._hydrant.revisionDate);
        }, e => {} , e => {});
    }

    DrawHydrantMarker() {
            this.map.RemoveAllMarkers();
            if (this._hydrant.gpsPoint != null) {
                const geo = new GpsPoint(this._hydrant.gpsPoint.lat, this._hydrant.gpsPoint.lon);
                this.map.AddMarker(geo);
                this.map.map.panTo([this._hydrant.gpsPoint.lat, this._hydrant.gpsPoint.lon]);
        }
    }

    get Hydrant(): Hydrant {
        return this._hydrant;
    }

    SaveButtonClick() {
        if (this.map.markers.length > 0) {
            const m = this.map.markers[0].getLatLng();
            this._hydrant.gpsPoint = new GpsPoint();
            this._hydrant.gpsPoint.lon = m.lng;
            this._hydrant.gpsPoint.lat = m.lat;
        }
        if (this._editMode) {
            this.hydrantService.updateHydrant(this.Hydrant).subscribe(
                (data: Hydrant) => {
                    this.Hydrant = data;
                    this.CloseModal();
                },
                error => console.log(error)
            );
        } else {
            this.hydrantService.addHydrant(this.Hydrant).subscribe(
                (data: Hydrant) => {
                    this.Hydrant = data;
                    this.CloseModal();
                },
                error => console.log(error)
            );
        }
    }

    EditHydrant(hydrant: Hydrant) {
        this._editMode = true;
        this.Hydrant = hydrant ;
    }

    PutViewMarker() {
        const center = this.map.GetCenterLtLn();
        this.map.RemoveAllMarkers();
        this.map.AddMarker(center);
    }


    CloseModal() {
        this.modalService.close();
        this.OnClose.next(null);
    }

    DeleteButtonClick() {
        this.hydrantService.deleteHydrant(this._hydrant.id).subscribe(data => {
            this.CloseModal();
        });
    }

    putDate() {
        const d = new Date(this._hydrant.revisionDate);
        this.revisionDateModel = d;
    }
}
