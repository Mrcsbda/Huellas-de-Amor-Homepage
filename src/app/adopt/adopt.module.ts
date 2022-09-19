import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdoptComponent } from './adopt/adopt.component';
import { AdoptRoutingModule } from './adopt-routing.module';



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
