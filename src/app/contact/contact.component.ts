import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  loading: boolean  = false;
  
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = true;
    }, 3000);
  }

}
