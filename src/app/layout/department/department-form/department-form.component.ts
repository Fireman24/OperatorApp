import {
    Component,  EventEmitter, Input, Output, QueryList, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Operator} from '../../../shared/models/Operator';
import {MapComponent} from '../../../shared/modules/map-module/map.component';
import {OperatorService} from '../../../shared/services/OperatorService';
import {GpsPoint} from '../../../shared/modules/map-module/GpsPoint';
import {DepartmentService} from '../../../shared/services/DepartmentService';
import {Department} from '../../../shared/models/Department';

@Component({
    selector: 'app-department-form',
    templateUrl: './department-form.component.html',
    providers: [ DepartmentService]
})
export class DepartmentFormComponent {
    private _department: Department = new Department();
    @ViewChild('content') content: any;
    @ViewChild('map') map: MapComponent;

    @Output()
    public OnClose: EventEmitter<any> = new EventEmitter();

    constructor(private modalService: NgbActiveModal, private departmentService: DepartmentService) { }

    set Department(value) {
        this._department = value;
        this.map.RemoveAllMarkers();
        if (this._department.gpsPoint != null) {
            const geo = new GpsPoint(this._department.gpsPoint.lat, this._department.gpsPoint.lon);
            this.map.AddMarker(geo);
        }
    }

    get Department(): Department {
        return this._department;
    }

    SaveButtonClick() {
        if (this.map.markers.length > 0) {
            const m = this.map.markers[0].getLatLng();
            this._department.gpsPoint = new GpsPoint();
            this._department.gpsPoint.lon = m.lng;
            this._department.gpsPoint.lat = m.lat;
        }
        this.departmentService.addDepartment(this.Department).subscribe(
            (data: Department) => {
                this.Department = data;
                this.CloseModal();
            },
            error => console.log(error)
        );

    }

    CreateNewOperator() {
    }

    EditOperator(department: Department) {
        this.Department = department ;
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
