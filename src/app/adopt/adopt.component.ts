import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.scss']
})
export class AdoptComponent implements OnInit {

  loading: boolean  = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = true;
    }, 3000);
  }

}
