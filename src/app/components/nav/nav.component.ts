import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  openedState: Boolean;

  constructor() {
    this.openedState = false;
  }

  ngOnInit() {
  }

  switchOpenedState(){
    this.openedState = !this.openedState;
  }

  setOpenedStateFalse(){
    this.openedState = false;
  }
}