import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FireCarComponent} from './firecar.component';

const routes: Routes = [
    {
        path: '',
        component: FireCarComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FireCarRoutingModule {}
