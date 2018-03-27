import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Departure} from '../../shared/models/Departure';
import {DepartureService} from '../../shared/services/DepartureService';
import * as moment from 'moment';
import {Observable} from 'rxjs/Observable';
import {HistoryRecord} from '../../shared/models/HistoryRecord';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FireCar} from '../../shared/models/FireCar';
import {Image} from '../../shared/models/Image';
import {HttpClient} from '@angular/common/http';
import {Backend} from '../../shared/services/Backend';
import {FireCarService} from '../../shared/services/FireCarService';

@Component({
    selector: 'app-firecar-info',
    templateUrl: './firecar-info.component.html',
    providers: [FireCarService]
})
export class FirecarInfoComponent implements OnInit {

    id: number;
    private subscription: Subscription;
    _loading: boolean;
    _firecar: FireCar = new FireCar();

    constructor(private _activateRoute: ActivatedRoute,
                private _router: Router,
                private _firecarService: FireCarService,
                private _http: HttpClient,
                private _modalService: NgbModal) {
        this.subscription = _activateRoute.params.subscribe(params => this.id = params['id']);
    }

    ngOnInit() {
        this.ReloadData();
    }

    public ReloadData() {
        this._loading = true;
        this._firecarService.getFireCarById(this.id).subscribe(data => {
            this._firecar = data;
            this._loading = false;
        });
    }

    OpenDocumentButtonClick(doc: Image) {
        const docUrl = Backend.HOST_URL + doc.url;
        window.open(docUrl);
    }
}
