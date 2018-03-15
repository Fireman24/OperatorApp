import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Departure} from '../../shared/models/Departure';
import {DepartureService} from '../../shared/services/DepartureService';

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
                private _departureService: DepartureService) {
        this.subscription = _activateRoute.params.subscribe(params => this.id = params['id']);
    }

    ngOnInit() {
        this._loading = true;
        this._departureService.getDepartureById(this.id).subscribe(data => {
            this._departure = data;
            this._loading = false;
        });
    }


}
