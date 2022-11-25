import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesTypeRoutingModule } from './directives-type-routing.module';
import { DirectivesTypeComponent } from './directives-type.component';
import { AttributeComponent } from './attribute/attribute.component';
import { AttributeTypesComponent } from './attribute-types/attribute-types.component';


@NgModule({
  declarations: [
    DirectivesTypeComponent,
    AttributeComponent,
    AttributeTypesComponent
  ],
  imports: [
    CommonModule,
    DirectivesTypeRoutingModule
  ]
})
export class DirectivesTypeModule { }
