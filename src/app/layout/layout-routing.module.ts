import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'map-page' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'operator', loadChildren: './operator/operator.module#OperatorModule' },
            { path: 'department', loadChildren: './department/department.module#DepartmentModule' },
            { path: 'hydrant', loadChildren: './hydrant/hydrant.module#HydrantModule' },
            { path: 'address', loadChildren: './address/address.module#AddressModule' },
            { path: 'firecar', loadChildren: './firecar/firecar.module#FireCarModule' },
            { path: 'departure', loadChildren: './departure-list/departure-list.module#DepartureListModule' },
            { path: 'departure/:id', loadChildren: './departure/departure.module#DepartureModule' },
            { path: 'fire', loadChildren: './fire-list/fire-list.module#FireListModule' },
            { path: 'fire/:id', loadChildren: './fire/fire.module#FireModule' },
            { path: 'firecar/:id', loadChildren: './firecar-info/firecar-info.module#FirecarInfoModule' },
            { path: 'map-page', loadChildren: './map-page/map-page.module#MapPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
