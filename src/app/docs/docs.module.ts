import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DocsRoutingModule} from './docs-routing.module';
import {ComponentListComponent} from './component-list/component-list.component';
import {ComponentsModule} from '../components/components.module';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ComponentListComponent
  ],
  imports: [
    CommonModule,
    DocsRoutingModule,
    ComponentsModule,
    FormsModule
  ]
})
export class DocsModule {
}
