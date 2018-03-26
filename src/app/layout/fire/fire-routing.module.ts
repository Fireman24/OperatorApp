import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FireComponent} from './fire.component';

const routes: Routes = [
    {
        path: '',
        component: FireComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FireRoutingModule {}
