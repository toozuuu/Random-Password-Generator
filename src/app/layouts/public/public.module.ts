import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicComponent} from './public.component';
import {PublicRoutingModule} from './public-routing.module';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {ClipboardModule} from "@angular/cdk/clipboard";


@NgModule({
  declarations: [
    PublicComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatIconModule,
    FormsModule,
    MatCheckboxModule,
    ClipboardModule
  ]
})
export class PublicModule {
}
