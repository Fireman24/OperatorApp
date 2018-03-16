import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { PageHeaderModule } from '../../shared/';
import {DepartureListComponent} from './departure-list.component';
import {DepartureListRoutingModule} from './departure-list-routing.module';
import {AddDepartureModalComponent} from './add-departure-modal/add-departure-modal.component';
import {FormsModule} from '@angular/forms';
import {MomentModule} from 'angular2-moment';


@NgModule({
    imports: [CommonModule, DepartureListRoutingModule, PageHeaderModule, TranslateModule, NgbModule.forRoot(), FormsModule, MomentModule],
    declarations: [DepartureListComponent, AddDepartureModalComponent],
    entryComponents: [AddDepartureModalComponent]
})
export class DepartureListModule {}
