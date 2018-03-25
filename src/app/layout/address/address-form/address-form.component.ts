import {
    Component, EventEmitter, OnInit, Output, ViewChild
} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MapComponent} from '../../../shared/modules/map-module/map.component';
import {GpsPoint} from '../../../shared/modules/map-module/GpsPoint';
import {AddressService} from '../../../shared/services/AddressService';
import {Address} from '../../../shared/models/Address';
import {DepartmentService} from '../../../shared/services/DepartmentService';
import {Department} from '../../../shared/models/Department';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-address-form',
    templateUrl: './address-form.component.html',
    providers: [ DepartmentService, AddressService]
})
export class AddressFormComponent implements OnInit {

    private _address: Address = new Address();
    private _departments: Department[] = [];

    @ViewChild('map') map: MapComponent;

    @Output()
    public OnClose: EventEmitter<any> = new EventEmitter();

    @Output()
    public OnInit: EventEmitter<any> = new EventEmitter();

    constructor(private modalService: NgbActiveModal,
                private addressService: AddressService,
                private departmentService: DepartmentService) { }

    ngOnInit(): void {
        this.OnInit.next(null);

        this.departmentService.getDepartments().subscribe(data => {
            this._departments = data;
        });
    }

    set Address(value) {
        if (value == null) {
            return;
        }
        this._address = value;
        // Если карта готова - рисует, если нет, то подписываемся на карту.
        if (this.map.MapReady) {
            this.DrawAddressMarker();
        } else {
            this.map.OnReady.subscribe(e => {
                this.DrawAddressMarker();
            });
        }
    }

    get DepartmentsList(): Department[] {
        return this._departments;
    }

    DrawAddressMarker() {
            this.map.RemoveAllMarkers();
            if (this._address.gpsPoint.lat !== 0) {
                const geo = new GpsPoint(this._address.gpsPoint.lat, this._address.gpsPoint.lon);
                this.map.AddMarker(geo);
                this.map.map.panTo([this._address.gpsPoint.lat, this._address.gpsPoint.lon]);
        }
    }

    get Address(): Address {
        return this._address;
    }

    SaveButtonClick() {
        if (this.map.markers.length > 0) {
            const m = this.map.markers[0].getLatLng();
            this._address.gpsPoint.lon = m.lng;
            this._address.gpsPoint.lat = m.lat;
        }
            this.addressService.addAddress(this._address).subscribe(
                (data: Address) => {
                    this.Address = data;
                    this.CloseModal();
                },
                error => console.log(error)
            );
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

    search = (text$: Observable<string>) => {
        return text$
            .map(term => term === '' ? []
                : this.DepartmentsList.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
    }

    public departmentFormatter = (x: {name: string}) => x.name;
}
