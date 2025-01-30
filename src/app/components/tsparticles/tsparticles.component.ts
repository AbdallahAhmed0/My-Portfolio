import { Component, OnInit } from '@angular/core';
import { MoveDirection, Container, Engine, OutMode, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; 
import { NgxParticlesModule, NgParticlesService } from "@tsparticles/angular";
@Component({
  selector: 'app-tsparticles',
  imports: [NgxParticlesModule],
  templateUrl: './tsparticles.component.html',
  styleUrl: './tsparticles.component.scss'
})
export class TsparticlesComponent {
  id = "tsparticles";
  particlesOptions = {
    background: {
      color: { value: "#5b7553" }, // Background color
    },
    fpsLimit: 60, // Frames per second limit
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push", // Click action: add particles
        },
        onHover: {
          enable: true,
          mode: "repulse", // Hover action: repulse particles
        },
        resize: {
          enable: true, // Enable resizing
          delay: 0.5,   // Optional delay for resize event
        },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      number: {
        value: 80,
        density: { enable: true, area: 800 },
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: 0.5,  // Particle opacity
        random: false,
      },
      size: {
        value: 5,
        random: true,
      },
      move: {
        enable: true,
        speed: 2,
        direction: MoveDirection.none,  // Particles do not move in any specific direction
        random: false,
        straight: false,
        outModes: OutMode.bounce, // When particles leave the screen, they bounce back
      },
    },
    detectRetina: true,
  };

  
constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine: Engine) => {
      await loadSlim(engine);
    });
  }

  


}
