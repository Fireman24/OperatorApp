import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PageHeaderModule } from '../../shared/';

import {MapModule} from '../../shared/modules/map-module/map.module';
import {DepartmentComponent} from './department.component';
import {DepartmentRoutingModule} from './department-routing.module';
import {DepartmentService} from '../../shared/services/DepartmentService';
import {DepartmentFormComponent} from './department-form/department-form.component';
import {DepartmentFormModule} from './department-form/department-form.module';

@NgModule({
    imports: [CommonModule, DepartmentRoutingModule, PageHeaderModule, TranslateModule, MapModule, DepartmentFormModule],
    declarations: [DepartmentComponent]
})
export class DepartmentModule {}
