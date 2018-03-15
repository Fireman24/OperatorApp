import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartureComponent} from './departure.component';

const routes: Routes = [
    {
        path: '',
        component: DepartureComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartureRoutingModule {}
