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

@Component({
    selector: 'app-add-departure-modal',
    templateUrl: './add-departure-modal.component.html',
    providers: [ DepartureService, AddressService, StringDateProvider]
})
export class AddDepartureModalComponent implements OnInit {

    private _departure: Departure = new Departure();

    @Output()
    public OnClose: EventEmitter<any> = new EventEmitter();

    private _address: Address = new Address();
    public AddressSearching = false;
    public AddressSearchFailed = false;
    public hideSearchingAddress = new Observable(() => () => this.AddressSearching = false);

    public SearchAddress = (text$: Observable<string>) =>
        text$
            .debounceTime(300)
            .distinctUntilChanged()
            .do(() => this.AddressSearching = true)
            .switchMap(term => term === '' ? [] :
                this._addressService.getAddressesStartWith(term)
                    .do(() => this.AddressSearchFailed = false)
                    .catch(() => {
                        this.AddressSearchFailed = true;
                        return of([]);
                    }))
            .do(() => this.AddressSearching = false)
            .merge(this.hideSearchingAddress)

    public get Address(): Address {
        return this._address;
    }

    public set Address(value: Address) {
        if ( value === null ) {
            return;
        }
        this._address = value;
        this._departure.address = this._address.label;
        this._departure.gpsPoint = this._address.gpsPoint;
        this._departure.gpsPoint.id = 0;
    }


    constructor(private _modalService: NgbActiveModal,
                private _departureService: DepartureService,
                public _addressService: AddressService) {
    }

    ngOnInit(): void {
    }

    CloseModal() {
        this._modalService.close();
        this.OnClose.next(null);
    }

    AddressFormatter (x: Address) {
        return x.label;
    }

    SaveButtonClick() {
        this._departure.dateTime = new Date(Date.now()).toISOString();
        this._departureService.addDeparture(this._departure).subscribe(data => {
            this.CloseModal();
        });
    }

}
