import {
    AfterViewChecked, AfterViewInit, Component,  EventEmitter, Input, Output, QueryList, ViewChild,
    ViewChildren
} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Operator} from '../../../shared/models/Operator';
import {MapComponent} from '../../../shared/modules/map-module/map.component';
import {AdminService} from '../../../shared/services/AdminService';
import {GpsPoint} from '../../../shared/modules/map-module/GpsPoint';

@Component({
    selector: 'app-operator-form',
    templateUrl: './operator-form.component.html',
})



export class OperatorFormComponent {
    private _operator: Operator = new Operator();
    @ViewChild('content') content: any;
    @ViewChild('map') map: MapComponent;

    @Output()
    public OnClose: EventEmitter<any> = new EventEmitter();

    constructor(private modalService: NgbActiveModal, private adminService: AdminService) { }

    set Operator(value) {
        this._operator = value;
        this.map.RemoveAllMarkers();
        if (this._operator.geoZone != null) {
            const geo = new GpsPoint(this._operator.geoZone.lat, this._operator.geoZone.lon);
            this.map.AddMarker(geo);
        }
    }

    SaveButtonClick() {
        if (this.map.markers.length > 0) {
            const m = this.map.markers[0].getLatLng();
            this._operator.geoZone = new GpsPoint();
            this._operator.geoZone.lon = m.lng;
            this._operator.geoZone.lat = m.lat;
        }
        this.adminService.addOperator(this._operator).subscribe(
            (data: Operator) => {
                this.Operator = data;
                this.CloseModal();
                },
            error => console.log(error)
        );

    }

    CreateNewOperator() {
    }

    EditOperator(operator: Operator) {
        this._operator = operator ;
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
}
