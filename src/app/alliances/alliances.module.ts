import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlliancesRoutingModule } from './alliances-routing.module';
import {AlliancesComponent} from "./alliances.component";



@NgModule({
  declarations: [
    AlliancesComponent
  ],
  exports: [
    AlliancesComponent,
  ],
  imports: [
    CommonModule,
    AlliancesRoutingModule
  ]
})
export class AlliancesModule { }
