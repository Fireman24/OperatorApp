import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FireListComponent} from './fire-list.component';


const routes: Routes = [
    {
        path: '',
        component: FireListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FireListRoutingModule {}
