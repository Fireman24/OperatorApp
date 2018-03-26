import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FireComponent} from './fire.component';
import {FireRoutingModule} from './fire-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {PageHeaderModule} from '../../shared';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MomentModule} from 'angular2-moment';
import {AddCarModalComponent} from './add-car-modal/add-car-modal.component';
import {AddDocumentModalComponent} from './add-doc-modal/add-doc-modal.component';



@NgModule({
    imports: [CommonModule, FireRoutingModule, PageHeaderModule, TranslateModule, NgbModule.forRoot(), FormsModule, MomentModule],
    declarations: [FireComponent, AddCarModalComponent, AddDocumentModalComponent],
    entryComponents: [AddCarModalComponent, AddDocumentModalComponent]

})
export class FireModule {}
