import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { NgxParticlesModule } from "@tsparticles/angular";
import { AboutComponent } from "./components/about/about.component";

@Component({
  selector: 'app-root',
  imports: [NgxParticlesModule, HeaderComponent, HeroComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
