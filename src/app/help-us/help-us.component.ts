import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-us',
  templateUrl: './help-us.component.html',
  styleUrls: ['./help-us.component.scss']
})
export class HelpUsComponent implements OnInit {

  loading: boolean  = false;
  
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = true;
    }, 3000);
  }
}
