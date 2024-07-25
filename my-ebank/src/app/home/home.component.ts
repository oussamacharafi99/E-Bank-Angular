import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  check: boolean = false;
  check1: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  onOpenOrClose(check: boolean): void {
    this.check = check;
  }

  onOpenOrCloseSignup(check1: boolean): void {
    this.check1 = check1;
  }
}
