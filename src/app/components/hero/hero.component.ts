import { Component } from '@angular/core';
import { NgParticlesModule } from 'ng-particles';
import { ISourceOptions } from 'tsparticles-engine';

@Component({
  selector: 'app-hero',
  imports: [NgParticlesModule ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  particlesOptions: ISourceOptions = {
    background: {
      color: {
        value: '#FFFFFF' // Background color
      }
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: '#DDD' // Particle color
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.8,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        outModes: {
          default: 'out'
        }
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: 'circle'
      },
      size: {
        value: { min: 1, max: 5 }
      }
    },
    detectRetina: true
  };
}

