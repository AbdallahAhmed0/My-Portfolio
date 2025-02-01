import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { NgxParticlesModule } from "@tsparticles/angular";
import { AboutComponent } from "./components/about/about.component";
import { SkillsComponent } from "./components/skills/skills.component";

@Component({
  selector: 'app-root',
  imports: [NgxParticlesModule, HeaderComponent, HeroComponent, AboutComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
