import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import {FireCarFormComponent} from './firecar-form.component';

@NgModule({
    imports: [CommonModule, TranslateModule, NgbModule.forRoot(), FormsModule],
    declarations: [ FireCarFormComponent],
    exports: [ FireCarFormComponent],
    entryComponents: [ FireCarFormComponent]
})
export class FireCarFormModule {}
