import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirecarInfoComponent} from './firecar-info.component';

const routes: Routes = [
    {
        path: '',
        component: FirecarInfoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FirecarInfoRoutingModule {}
