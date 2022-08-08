import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeShowComponent } from './employee-show/employee-show.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: EmployeeListComponent },
    { path: 'create', component: EmployeeCreateComponent },
    { path: 'show/:id', component: EmployeeShowComponent },
    { path: 'edit/:id', component: EmployeeEditComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {} 