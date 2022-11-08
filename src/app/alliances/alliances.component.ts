import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alliances',
  templateUrl: './alliances.component.html',
  styleUrls: ['./alliances.component.scss']
})
export class AlliancesComponent implements OnInit {

  loading: boolean  = false;
  
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = true;
    }, 3000);
  }
}
