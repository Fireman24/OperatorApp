import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {routerTransition} from '../../router.animations';
import {HydrantService} from '../../shared/services/HydrantService';
import {Hydrant} from '../../shared/models/Hydrant';
import {FireCarService} from '../../shared/services/FireCarService';
import {FireCar} from '../../shared/models/FireCar';
import {FireCarFormComponent} from './firecar-form/firecar-form.component';

@Component({
    selector: 'app-firecar',
    templateUrl: './firecar.component.html',
    providers: [FireCarService, NgbModal]
})

export class FireCarComponent implements OnInit {
    loading = false;
    fireCarsList: FireCar[] = [];

    constructor(private fireCarService: FireCarService, private modalService: NgbModal) {
    }

    ngOnInit(): void {
        this.RefreshList();
    }

    RefreshList() {
        this.loading = true;
        this.fireCarService.getFireCars().subscribe(data => {
            this.fireCarsList = data;
            this.loading = false;
        });
    }

    AddButtonClick() {
        const modalRef = this.modalService.open(FireCarFormComponent);
        const form = modalRef.componentInstance;
        form.OnClose.subscribe(e => {
            this.RefreshList();
        });
    }

    EditButtonClick(car: FireCar) {
        const modalRef = this.modalService.open(FireCarFormComponent);
        const form = modalRef.componentInstance;
        form.OnClose.subscribe(e => {
            this.RefreshList();
        });
        form.EditFireCar(car);
    }
}
