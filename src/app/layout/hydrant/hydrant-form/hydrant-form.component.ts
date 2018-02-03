import {
    AfterViewInit,
    Component, EventEmitter, Input, Output, QueryList, ViewChild
} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MapComponent} from '../../../shared/modules/map-module/map.component';
import {GpsPoint} from '../../../shared/modules/map-module/GpsPoint';
import {HydrantService} from '../../../shared/services/HydrantService';
import {Hydrant} from '../../../shared/models/Hydrant';

@Component({
    selector: 'app-hydrant-form',
    templateUrl: './hydrant-form.component.html',
    providers: [ HydrantService]
})
export class HydrantFormComponent implements AfterViewInit {
    private _hydrant: Hydrant = new Hydrant();
    public hydrantRevisionDate = new Date();


    @ViewChild('content') content: any;
    @ViewChild('map') map: MapComponent;

    private _editMode = false;

    @Output()
    public OnClose: EventEmitter<any> = new EventEmitter();

    @Output()
    public OnReady: EventEmitter<any> = new EventEmitter();



    constructor(private modalService: NgbActiveModal, private hydrantService: HydrantService) { }

    ngAfterViewInit(): void {
        this.OnReady.next(null);
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
        try {
            const date = new Date(this._hydrant.revisionDate);
            this.hydrantRevisionDate.setDate( date.getDate());
            console.warn(this.hydrantRevisionDate);
        } catch (Exception) {
        }
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
        //this._hydrant.revisionDate = this.hydrantRevisionDate.toTimeString();
        return this._hydrant;
    }

    SaveButtonClick() {
        console.warn(this.Hydrant);
    /*    if (this.map.markers.length > 0) {
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
        } */
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
}
