import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  
  elements: NavbarElements[] = [
  {
    label: "Inicio",
    route: ""
  },
  {
    label: "Adopta",
    route: "adopta"
  },
  {
    label: "Alianzas",
    route: "alianzas"
  },
  {
    label: "Ayudanos",
    route: "ayudanos"
  },
  {
    label: "Contacto",
    route: "contacto"
  }
];

showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }

}


interface NavbarElements{
  label: string,
  route: string
  }
