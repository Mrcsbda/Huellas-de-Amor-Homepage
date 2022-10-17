import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AdoptModule } from './adopt/adopt.module';
import { HomeModule } from './home/home.module';
import { AlliancesModule } from './alliances/alliances.module';
import { HelpUsModule } from './help-us/help-us.module';
import { ContactModule } from './contact/contact.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {CommonComponentsModule} from "./common-components/common-components.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    AdoptModule,
    AlliancesModule,
    HelpUsModule,
    ContactModule,
    CommonComponentsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
