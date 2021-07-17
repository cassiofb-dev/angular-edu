import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}

  goData() {
    this.router.navigate(['/reactive-form']);
  }

  goTemplate() {
    this.router.navigate(['/template-form']);
  }
}
