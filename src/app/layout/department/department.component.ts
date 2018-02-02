import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {OperatorService} from '../../shared/services/OperatorService';
import {routerTransition} from '../../router.animations';
import {DepartmentService} from '../../shared/services/DepartmentService';
import {Department} from '../../shared/models/Department';
import {DepartmentFormComponent} from './department-form/department-form.component';

@Component({
    selector: 'app-department',
    templateUrl: './department.component.html',
    animations: [routerTransition()],
    providers: [DepartmentService, NgbModal]
})

export class DepartmentComponent implements OnInit {
    loading = false;
    departmentList: Department[] = [];
    form: DepartmentFormComponent;

    constructor(private departmentService: DepartmentService, private modalService: NgbModal) {
    }

    ngOnInit(): void {
        this.RefreshList();
    }

    RefreshList() {
        this.loading = true;
        this.departmentService.getDepartments().subscribe(data => {
            this.departmentList = data;
            this.loading = false;
        });
    }

    AddButtonClick() {
        const modalRef = this.modalService.open(DepartmentFormComponent);
        this.form = modalRef.componentInstance;
        this.form.CreateNewOperator();
        this.form.OnClose.subscribe(e => {
            this.RefreshList();
        });
    }
}
