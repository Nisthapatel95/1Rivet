import { Attribute } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AttributeTypesComponent } from './attribute-types/attribute-types.component';
import { AttributeComponent } from './attribute/attribute.component';
import { DirectivesTypeComponent } from './directives-type.component';

const routes: Routes = [

  {
    path: '',
    component: DirectivesTypeComponent,
    children: [

      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: 'attribute',

      // },
      {
        path: 'attribute',
        component: AttributeComponent

      },
      {
      path: 'attribute-types',
      component: AttributeTypesComponent
      }  
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesTypeRoutingModule { }
