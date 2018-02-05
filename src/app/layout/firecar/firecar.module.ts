import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PageHeaderModule } from '../../shared/';

import {FireCarComponent} from './firecar.component';
import {FireCarFormModule} from './firecar-form/firecar-form.module';
import {FireCarRoutingModule} from './firecar-routing.module';

@NgModule({
    imports: [CommonModule, FireCarRoutingModule, PageHeaderModule, TranslateModule, FireCarFormModule],
    declarations: [FireCarComponent]
})
export class FireCarModule {}
