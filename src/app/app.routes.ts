import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'topbar', component: TopbarComponent },
];
