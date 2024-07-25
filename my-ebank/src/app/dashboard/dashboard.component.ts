import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  check: boolean = false;

  onOpenOrClose(check: boolean) {
    this.check = check;
  }

  check1: boolean = false;

  onOpenOrCloseBeneficier(check1: boolean) {
    this.check1 = check1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
