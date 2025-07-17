import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'topbar', component: TopbarComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'hero', component: HeroComponent },
];
