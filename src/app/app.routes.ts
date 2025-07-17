import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { UnionStateRelationsComponent } from './union-state-relations/union-state-relations.component';
import { AboutCommitteeComponentComponent } from './about-committee-component/about-committee-component.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'topbar', component: TopbarComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'unionstaterelations', component: UnionStateRelationsComponent },
  { path: 'committee',component:AboutCommitteeComponentComponent}
];
