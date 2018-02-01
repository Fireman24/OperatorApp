import {Component, OnInit, ViewChild} from '@angular/core';
import { routerTransition } from '../../router.animations';

import { OperatorFormComponent} from './operator-form/operator-form.component';

import { AdminService} from '../../shared/services/AdminService';
import {Operator} from '../../shared/models/Operator';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-operator',
    templateUrl: './operator.component.html',
    styleUrls: ['./operator.component.scss'],
    animations: [routerTransition()],
    providers: [AdminService, NgbModal]
})

export class OperatorComponent implements OnInit {

    operatorsList: Operator[] = [];
    @ViewChild('operatorForm') form: OperatorFormComponent;



    constructor(private adminService: AdminService, private modalService: NgbModal) {
    }

    ngOnInit() {
        this.RefreshList();
    }

    OnAddButtonClick() {
        const modalRef = this.modalService.open(OperatorFormComponent);
        this.form = modalRef.componentInstance;
        this.form.CreateNewOperator();
        this.form.OnClose.subscribe(e => {
            this.RefreshList();
        });
    }

    OnDeactivateButtonClick(operatorId: number) {

        this.adminService.deactivateOperator(operatorId).subscribe(data => {
                this.RefreshList();
            }
        , error => {});
    }

    RefreshList() {
        this.adminService.getOperators().subscribe(data => this.operatorsList = data);
    }
}
