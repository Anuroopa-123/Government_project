import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  navbarActive = false;
  constructor() {}

  ngOnInit(): void {}
  // Method to toggle navbar on mobile
  toggleNavbar() {
    this.navbarActive = !this.navbarActive;
  }
}
