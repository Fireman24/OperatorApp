import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Departure} from '../../shared/models/Departure';
import {DepartureService} from '../../shared/services/DepartureService';
import * as moment from 'moment';
import {Observable} from 'rxjs/Observable';
import {HistoryRecord} from '../../shared/models/HistoryRecord';
import {AddDepartureModalComponent} from '../departure-list/add-departure-modal/add-departure-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddCarModalComponent} from './add-car-modal/add-car-modal.component';
import {FireCar} from '../../shared/models/FireCar';

@Component({
    selector: 'app-departure',
    templateUrl: './departure.component.html',
    providers: [DepartureService]
})
export class DepartureComponent implements OnInit {

    id: number;
    private subscription: Subscription;
    _loading: boolean;
    _departure: Departure = new Departure();


    constructor(private _activateRoute: ActivatedRoute,
                private _router: Router,
                private _departureService: DepartureService,
                private _modalService: NgbModal) {
        this.subscription = _activateRoute.params.subscribe(params => this.id = params['id']);
    }

    ngOnInit() {
        this.ReloadData();
    }

    public ReloadData() {
        this._loading = true;
        this._departureService.getDepartureById(this.id).subscribe(data => {
            this._departure = data;
            this._loading = false;
        });
    }

    AddCarButtonClick() {
        const modalRef = this._modalService.open(AddCarModalComponent);
        const form = modalRef.componentInstance;
        form.OnClose.subscribe(e => {
            if ( form.car != null) {
                this._departureService.addFirecar(this._departure.id, form.car).subscribe(data => {
                    this.ReloadData();
                });
            }

        });
    }

    public SaveData() {
        this._loading = true;
        this._departureService.updateDeparture(this._departure).subscribe(data => this.ReloadData());
    }

    public AddHistoryRecord(value: string) {
        const hrecord = new HistoryRecord();
        hrecord.dateTime =  new Date(Date.now()).toISOString();
        hrecord.record = value;
        this._departure.history.push(hrecord);
    }


    RemoveFirecar(car: FireCar) {
        this._departureService.deleteFirecar(this._departure.id, car).subscribe(data => this.ReloadData());
    }
}
