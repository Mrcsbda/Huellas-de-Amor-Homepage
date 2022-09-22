import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from "./contact.component";
import {ContactRoutingModule} from "./contact-routing.module";
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactComponent
  ],
  exports: [
  ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
