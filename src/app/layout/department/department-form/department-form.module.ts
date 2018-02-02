import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { MapModule} from '../../../shared/modules/map-module/map.module';
import { FormsModule } from '@angular/forms';
import {DepartmentFormComponent} from './department-form.component';

@NgModule({
    imports: [CommonModule, TranslateModule, NgbModule.forRoot(), MapModule, FormsModule],
    declarations: [ DepartmentFormComponent],
    exports: [ DepartmentFormComponent],
    entryComponents: [ DepartmentFormComponent]
})
export class DepartmentFormModule {}
