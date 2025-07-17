import { Component } from '@angular/core';
import { UnionStateRelationsComponent } from "../union-state-relations/union-state-relations.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [UnionStateRelationsComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
