import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {OperatorService} from '../../shared/services/OperatorService';
import {routerTransition} from '../../router.animations';
import {HydrantService} from '../../shared/services/HydrantService';
import {Hydrant} from '../../shared/models/Hydrant';
import {HydrantFormComponent} from './hydrant-form/hydrant-form.component';

@Component({
    selector: 'app-hydrant',
    templateUrl: './hydrant.component.html',
    animations: [routerTransition()],
    providers: [HydrantService, NgbModal]
})

export class HydrantComponent implements OnInit {
    loading = false;
    hydrantList: Hydrant[] = [];

    constructor(private hydrantService: HydrantService, private modalService: NgbModal) {
    }

    ngOnInit(): void {
        this.RefreshList();
    }

    RefreshList() {
        this.loading = true;
        this.hydrantService.getHydrants().subscribe(data => {
            this.hydrantList = data;
            this.loading = false;
        });
    }

    AddButtonClick() {
        const modalRef = this.modalService.open(HydrantFormComponent);
        const form = modalRef.componentInstance;
        form.OnClose.subscribe(e => {
            this.RefreshList();
        });
    }

    EditButtonClick(hyd: Hydrant) {
        const modalRef = this.modalService.open(HydrantFormComponent);
        const form = modalRef.componentInstance;
        form.OnClose.subscribe(e => {
            this.RefreshList();
        });
        form.EditHydrant(hyd);
    }
}
