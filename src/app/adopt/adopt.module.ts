import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdoptRoutingModule } from './adopt-routing.module';
import {AdoptComponent} from "./adopt.component";



@NgModule({
  declarations: [
    AdoptComponent
  ],
  exports: [
    AdoptComponent,
  ],
  imports: [
    CommonModule,
    AdoptRoutingModule
  ]
})
export class AdoptModule { }
