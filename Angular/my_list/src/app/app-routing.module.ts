import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeTypesComponent } from './directives-type/attribute-types/attribute-types.component';
import { AttributeComponent } from './directives-type/attribute/attribute.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { UserFormComponent } from './shared/user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path:'home',
    component:HomeComponent

  },
  {
    path: 'directives',
    loadChildren: () => import('./directives-type/directives-type.module').then(m => m.DirectivesTypeModule),
    data: {
      // title: 'Employee',
      breadcrumbs: 'directives'
    }
  },
  {
    path: 'list',
    component:AttributeTypesComponent
  },
  {
    path: 'parent',
    component:ParentComponent
  },
   {
    path: 'user-form',
    component:UserFormComponent
   },
  {
    path:'employee',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
