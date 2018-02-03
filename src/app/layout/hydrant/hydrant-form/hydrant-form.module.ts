import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { MapModule} from '../../../shared/modules/map-module/map.module';
import { FormsModule } from '@angular/forms';
import {HydrantFormComponent} from './hydrant-form.component';

@NgModule({
    imports: [CommonModule, TranslateModule, NgbModule.forRoot(), MapModule, FormsModule],
    declarations: [ HydrantFormComponent],
    exports: [ HydrantFormComponent],
    entryComponents: [ HydrantFormComponent]
})
export class HydrantFormModule {}
