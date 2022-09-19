import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlliancesComponent } from './alliances/alliances.component';
import { AlliancesRoutingModule } from './alliances-routing.module';



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
