import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {routerTransition} from '../../router.animations';
import {FireCar} from '../../shared/models/FireCar';
import {StorageService} from '../../shared/services/StorageService';
import {Departure} from '../../shared/models/Departure';
import {DepartureService} from '../../shared/services/DepartureService';
import {FireCarFormComponent} from '../firecar/firecar-form/firecar-form.component';
import {AddDepartureModalComponent} from './add-departure-modal/add-departure-modal.component';
import {Router} from '@angular/router';


@Component({
    selector: 'app-departure-list',
    templateUrl: './departure-list.component.html',
    providers: [DepartureService, StorageService, NgbModal]
})

export class DepartureListComponent implements OnInit {
    private readonly _departureAlert = 'departure_alert';
    public _hideAlert: boolean;
    public _loading = false;

    public fireCarsList: FireCar[] = [];
    public _departures: Departure[] = [];

    constructor(private _departureService: DepartureService,
                private _storage: StorageService,
                private _modalService: NgbModal,
                private router: Router ) {
        const alert = _storage.GetLocalAsBoolean(this._departureAlert);
        this._hideAlert = alert;
    }

    ngOnInit(): void {
        this.RefreshList();
    }

    RefreshList() {
        this._loading = true;
        this._departureService.getDepartures().subscribe(data => {
            this._departures = data;
            this._loading = false;
        });
    }

    AddButtonClick() {
        const modalRef = this._modalService.open(AddDepartureModalComponent);
        const form = modalRef.componentInstance;
        form.OnClose.subscribe(e => {
            this.RefreshList();
        });
    }

    CloseAlert() {
        this._hideAlert = true;
        this._storage.SetLocalData('departure_alert', this._hideAlert.toString());
    }

    ManageButtonClick(dep: Departure) {
        this.router.navigate(
            ['/departure', dep.id]);
    }

    ShowAllDepartures() {
        this._loading = true;
        this._departureService.getDepartures(true).subscribe(data => {
            this._departures = data;
            this._loading = false;
        });
    }
}
