import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartureListComponent} from './fire-list.component';


const routes: Routes = [
    {
        path: '',
        component: DepartureListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartureListRoutingModule {}
