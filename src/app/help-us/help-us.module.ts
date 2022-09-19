import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpUsComponent } from './help-us/help-us.component';
import { HelpUsRoutingModule } from './help-us-rounting.module';



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
