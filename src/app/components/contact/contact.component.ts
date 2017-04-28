import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  options: any;

  constructor() { }

  ngOnInit() {
    this.options = {
      center: { lat: 10.6337322, lng: -71.747168 },
      zoom: 11
    };
  }
}
