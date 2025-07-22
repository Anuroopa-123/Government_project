import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-assembly',
  standalone: true,
  imports: [],
  templateUrl: './assembly.component.html',
  styleUrl: './assembly.component.css'
})
export class AssemblyComponent implements OnInit{
 
ngOnInit() {
  
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true,
    });
  }
}
