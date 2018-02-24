import {Component, OnInit, ViewChild} from '@angular/core';
import { routerTransition } from '../../router.animations';

import { OperatorFormComponent} from './operator-form/operator-form.component';

import { OperatorService} from '../../shared/services/OperatorService';
import {Operator} from '../../shared/models/Operator';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-operator',
    templateUrl: './operator.component.html',
    styleUrls: ['./operator.component.scss'],
    providers: [OperatorService, NgbModal]
})

export class OperatorComponent implements OnInit {

    operatorsList: Operator[] = [];
    @ViewChild('operatorForm') form: OperatorFormComponent;

    loading = false;


    constructor(private operatorService: OperatorService, private modalService: NgbModal) {
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
        this.loading = true;
        this.operatorService.deactivateOperator(operatorId).subscribe(data => {
                this.RefreshList();
            }
        , error => {});
    }

    RefreshList() {
        this.loading = true;
        this.operatorService.getOperators().subscribe(data => {
            this.operatorsList = data;
            this.loading = false;
        });
    }
}
