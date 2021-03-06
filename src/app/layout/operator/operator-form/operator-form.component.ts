import {
    Component,  EventEmitter, Input, Output, QueryList, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Operator} from '../../../shared/models/Operator';
import {MapComponent} from '../../../shared/modules/map-module/map.component';
import {OperatorService} from '../../../shared/services/OperatorService';
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

    constructor(private modalService: NgbActiveModal, private operatorService: OperatorService) { }

    set Operator(value) {
        this._operator = value;
        this.map.RemoveAllMarkers();
        if (this._operator.geoZone != null) {
            const geo = new GpsPoint(this._operator.geoZone.lat, this._operator.geoZone.lon);
            this.map.AddMarker(geo);
        }
    }

    get Operator(): Operator {
        return this._operator;
    }

    SaveButtonClick() {
        if (this.map.markers.length > 0) {
            const m = this.map.markers[0].getLatLng();
            this._operator.geoZone = new GpsPoint();
            this._operator.geoZone.lon = m.lng;
            this._operator.geoZone.lat = m.lat;
        }
        this.operatorService.addOperator(this.Operator).subscribe(
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
        this.Operator = operator ;
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
