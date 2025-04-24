import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { NgxParticlesModule } from "@tsparticles/angular";
import { AboutComponent } from "./components/about/about.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import * as AOS from 'aos';
import { LoadingComponent } from './components/loading/loading.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [NgxParticlesModule, HeaderComponent, HeroComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent, FooterComponent,LoadingComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  isLoading = true;


  ngOnInit() {
      
    // Simulate loading delay
      setTimeout(() => {
        this.isLoading = false;
      }, 0); // Change duration as needed
    
    AOS.init({
      duration: 2000, // Animation duration
      once: false, // Whether animation should happen only once
      easing: 'ease-in-out', // Easing type
      offset: 100, // Offset (in pixels) from the original trigger point
    }); 
   }
}
