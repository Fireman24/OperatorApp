import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {routerTransition} from '../../router.animations';
import {AddressService} from '../../shared/services/AddressService';
import { Address} from '../../shared/models/Address';
import {AddressFormComponent} from './address-form/address-form.component';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    providers: [AddressService, NgbModal]
})

export class AddressComponent implements OnInit {
    loading = false;
    addressList: Address[] = [];

    constructor(private addressService: AddressService, private modalService: NgbModal) {
    }

    ngOnInit(): void {
        this.RefreshList();
    }

    RefreshList() {
        this.loading = true;
        this.addressService.getAddresses().subscribe(data => {
            this.addressList = data;
            this.loading = false;
        });
    }

    AddButtonClick() {
        const modalRef = this.modalService.open(AddressFormComponent);
        const form = modalRef.componentInstance;
        form.OnClose.subscribe(e => {
            this.RefreshList();
        });
    }

    DeleteButtonClick(id: number) {
        this.loading = true;
        this.addressService.deleteAddress(id).subscribe(data => {
            this.RefreshList();
        });
    }
}
