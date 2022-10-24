import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  elements: NavbarElements[] = [
    {
      label: 'Inicio',
      route: '',
    },
    {
      label: 'Adopta',
      route: 'adopta',
    },
    {
      label: 'Alianzas',
      route: 'alianzas',
    },
    {
      label: 'Ayudanos',
      route: 'ayudanos',
    },
    {
      label: 'Contacto',
      route: 'contacto',
    },
  ];
  active:boolean = false;

  @Output() activeSidenav = new EventEmitter<boolean>()
  @ViewChild('sidenav') sidenav!:MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
    this.active = false;
    this.activeSidenav.emit(false);
  };

  openSidenav() {
    this.sidenav.open();
    this.active = true;
    this.activeSidenav.emit(true);
  }
}

interface NavbarElements {
  label: string;
  route: string;
}
