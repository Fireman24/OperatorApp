import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FireService} from '../../shared/services/FireService';
import {Fire} from '../../shared/models/Fire';
import {AddFireModalComponent} from './add-fire-modal/add-fire-modal.component';
import {Router} from '@angular/router';


@Component({
    selector: 'app-fire-list',
    templateUrl: './fire-list.component.html',
    providers: [FireService, NgbModal]
})

export class FireListComponent implements OnInit {

    private _fires: Fire[] = [];
    private _loading = false;

    constructor(private _fireService: FireService,
                private _router: Router,
                private _modalService: NgbModal) {
    }

    ngOnInit(): void {
        this.RefreshList();
    }

    RefreshList() {
        this._loading = true;
        this._fireService.getFires().subscribe(data => {
            this._fires = data;
            this._loading = false;
        });
    }

    AddButtonClick() {
        const modalRef = this._modalService.open(AddFireModalComponent);
        const form = modalRef.componentInstance;
        form.OnClose.subscribe(e => {
            this.RefreshList();
        });
    }

    ManageButtonClick(fire: Fire) {
        this._router.navigate(
            ['/fire', fire.id]);
    }

    ShowAllFires() {
        this._loading = true;
        this._fireService.getFires(true).subscribe(data => {
            this._fires = data;
            this._loading = false;
        });
    }
}
