import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { NgxParticlesModule } from "@tsparticles/angular";

@Component({
  selector: 'app-root',
  imports: [  NgxParticlesModule,HeaderComponent, HeroComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
