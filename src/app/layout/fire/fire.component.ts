import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Departure} from '../../shared/models/Departure';
import {FireService} from '../../shared/services/FireService';
import * as moment from 'moment';
import {Observable} from 'rxjs/Observable';
import {HistoryRecord} from '../../shared/models/HistoryRecord';
import {AddDepartureModalComponent} from '../departure-list/add-departure-modal/add-departure-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddCarModalComponent} from './add-car-modal/add-car-modal.component';
import {FireCar} from '../../shared/models/FireCar';
import {AddDocumentModalComponent} from './add-doc-modal/add-doc-modal.component';
import {Image} from '../../shared/models/Image';
import {RequestOptions, ResponseContentType} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Backend} from '../../shared/services/Backend';
import {Fire} from '../../shared/models/Fire';

@Component({
    selector: 'app-fire',
    templateUrl: './fire.component.html',
    providers: [FireService]
})
export class FireComponent implements OnInit {

    id: number;
    private subscription: Subscription;
    _loading: boolean;
    _fire: Fire = new Fire();



    constructor(private _activateRoute: ActivatedRoute,
                private _router: Router,
                private _fireService: FireService,
                private _http: HttpClient,
                private _modalService: NgbModal) {
        this.subscription = _activateRoute.params.subscribe(params => this.id = params['id']);
    }

    ngOnInit() {
        this.ReloadData();
    }

    public ReloadData() {
        this._loading = true;
        this._fireService.getFireById(this.id).subscribe(data => {
            this._fire = data;
            this._loading = false;
        });
    }

    AddCarButtonClick() {
        const modalRef = this._modalService.open(AddCarModalComponent);
        const form = modalRef.componentInstance;
        form.OnClose.subscribe(e => {
            if ( form.car != null) {
                this._fireService.addFirecar(this._fire.id, form.car).subscribe(data => {
                    this.ReloadData();
                });
            }

        });
    }

    public SaveData() {
        this._loading = true;
        this._fireService.updateFire(this._fire).subscribe(data => this.ReloadData());
    }

    public AddHistoryRecord(value: string) {
        const hrecord = new HistoryRecord();
        hrecord.dateTime =  new Date(Date.now()).toISOString();
        hrecord.record = value;
        this._fire.history.push(hrecord);
    }


    RemoveFirecar(car: FireCar) {
        this._fireService.deleteFirecar(this._fire.id, car).subscribe(data => this.ReloadData());
    }

    AddDocument() {
        const modalRef = this._modalService.open(AddDocumentModalComponent);
        const form = modalRef.componentInstance;
        form.OnClose.subscribe(e => {
            if (form.file != null) {
                this._fireService.addDocument(this._fire.id, form.file).subscribe(data => {
                    this.ReloadData();
                });
            }
        });
    }

    OpenDocumentButtonClick(doc: Image) {
        const docUrl = Backend.HOST_URL + doc.url;
        window.open(docUrl);
    }

    RemoveDocumentButtonClick(doc: Image) {
        this._fireService.deleteDocument(this._fire.id, doc).subscribe(data => this.ReloadData());
    }
}
