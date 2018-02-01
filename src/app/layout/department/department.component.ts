import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AdminService} from '../../shared/services/AdminService';
import {routerTransition} from '../../router.animations';

@Component({
    selector: 'app-department',
    templateUrl: './department.component.html',
    animations: [routerTransition()],
    providers: [AdminService, NgbModal]
})

export class DepartmentComponent implements OnInit {
    ngOnInit(): void {
    }
}
