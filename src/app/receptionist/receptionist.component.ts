import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.scss']
})
export class ReceptionistComponent implements OnInit {

  constructor() { }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  ngOnInit(): void {
  }

}
