import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HydrantComponent} from './hydrant.component';

const routes: Routes = [
    {
        path: '',
        component: HydrantComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HydrantRoutingModule {}
