import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DepartureComponent} from './departure.component';
import {DepartureRoutingModule} from './departure-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {PageHeaderModule} from '../../shared';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MomentModule} from 'angular2-moment';
import {AddDepartureModalComponent} from '../departure-list/add-departure-modal/add-departure-modal.component';
import {AddCarModalComponent} from './add-car-modal/add-car-modal.component';



@NgModule({
    imports: [CommonModule, DepartureRoutingModule, PageHeaderModule, TranslateModule, NgbModule.forRoot(), FormsModule, MomentModule],
    declarations: [DepartureComponent, AddCarModalComponent],
    entryComponents: [AddCarModalComponent]

})
export class DepartureModule {}
