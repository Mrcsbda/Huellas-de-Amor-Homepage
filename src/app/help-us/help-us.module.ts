import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpUsRoutingModule } from './help-us-rounting.module';
import {HelpUsComponent} from "./help-us.component";



@NgModule({
  declarations: [
    HelpUsComponent
  ],
  exports: [
    HelpUsComponent
  ],
  imports: [
    CommonModule,
    HelpUsRoutingModule
  ]
})
export class HelpUsModule { }
