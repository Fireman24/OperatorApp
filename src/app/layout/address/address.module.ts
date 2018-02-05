import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PageHeaderModule } from '../../shared/';

import {MapModule} from '../../shared/modules/map-module/map.module';
import {AddressRoutingModule} from './address-routing.module';
import {AddressFormModule} from './address-form/address-form.module';
import {AddressComponent} from './address.component';

@NgModule({
    imports: [CommonModule, AddressRoutingModule, PageHeaderModule, TranslateModule, MapModule, AddressFormModule],
    declarations: [AddressComponent]
})
export class AddressModule {}
