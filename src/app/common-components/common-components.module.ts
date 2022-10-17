import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent, 
    NavbarComponent],
  imports: [
    CommonModule, 
    MatSidenavModule, 
    MatIconModule, 
    RouterModule, 
    MatListModule],
  exports: [
    FooterComponent, 
    NavbarComponent],
})
export class CommonComponentsModule {}
