import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PageHeaderModule } from '../../shared/';

import {MapModule} from '../../shared/modules/map-module/map.module';
import {DepartmentComponent} from './department.component';
import {DepartmentRoutingModule} from './department-routing.module';

@NgModule({
    imports: [CommonModule, DepartmentRoutingModule, PageHeaderModule, TranslateModule, MapModule],
    declarations: [DepartmentComponent]
})
export class DepartmentModule {}
