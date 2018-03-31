import {Component, EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DepartureService} from '../../../shared/services/DepartureService';
import {Observable} from 'rxjs/Observable';
import {Departure} from '../../../shared/models/Departure';
import {Address} from '../../../shared/models/Address';
import {AddressService} from '../../../shared/services/AddressService';
import {HttpClient, HttpParams} from '@angular/common/http';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';
import {GpsPoint} from '../../../shared/modules/map-module/GpsPoint';
import {StringDateProvider} from '../../../shared/providers/StringDateProvider';
import {Department} from '../../../shared/models/Department';
import {DepartmentService} from '../../../shared/services/DepartmentService';
import {FireCar} from '../../../shared/models/FireCar';

@Component({
    selector: 'app-car-departure-modal',
    templateUrl: './add-car-modal.component.html',
    providers: [ DepartmentService]
})
export class AddCarModalComponent implements OnInit {

    public car: FireCar = null;


    public _cars: FireCar[] = [];
    public _departments: Department[] = [];

    @Output()
    public OnClose: EventEmitter<any> = new EventEmitter();




    constructor(private _modalService: NgbActiveModal,
                private _departmentService: DepartmentService) {
    }

    ngOnInit(): void {
        this._departmentService.getDepartments().subscribe(data => this._departments = data);

    }

    CloseModal() {
        this._modalService.close();
        this.OnClose.next(null);
    }


    SelectCar(car: FireCar) {
        this.car = car;
        this.CloseModal();
    }

    SelectDepartment(dep: Department) {
        this._departmentService.getDepartmentById(dep.id).subscribe(data => this._cars = data.fireCars);
    }
}
