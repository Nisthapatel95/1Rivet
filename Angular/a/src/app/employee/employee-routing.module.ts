import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [{
  path:'',
  component:EmployeeComponent,

  children:[
    {
      path: '',
      redirectTo: 'list', pathMatch: 'full'
    },
    {
      path:'list',
      component:EmployeeListComponent
    },
    {
      path:'add',
      component:EmployeeFormComponent
    },
    {
      path:'edit/:id',
      component:EmployeeFormComponent
    },
    // {
    //   path:'save',
    //   component:EmployeeListComponent
    // }
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
